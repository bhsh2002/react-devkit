
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Typography, Toolbar, TextField, Switch, FormControlLabel } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { DataTable } from '../components';
import { useDebounce } from '../hooks/useDebounce';

// Default render function for the header
const defaultRenderHeader = ({ resourceName, createPath, createText, linkComponent }) => {
    const Link = linkComponent;
    return (
        <Toolbar sx={{ p: '0 !important', mb: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
            <Typography variant="h4" component="h1" sx={{ flexGrow: 1, mb: { xs: 2, sm: 0 } }}>
                {resourceName}
            </Typography>
            {createPath && (
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    // Use the passed Link component if it exists
                    {...(Link ? { component: Link, to: createPath } : { href: createPath })}
                >
                    {createText}
                </Button>
            )}
        </Toolbar>
    );
};

// Default render function for the filter/search area
const defaultRenderFilters = ({ searchable, searchQuery, setSearchQuery, filterOptions, filters, handleFilterChange, searchPlaceholder }) => (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2, alignItems: 'stretch' }}>
        {filterOptions.map(opt => (
            <FormControlLabel
                key={opt.name}
                control={<Switch checked={filters[opt.name]} onChange={handleFilterChange} name={opt.name} />}
                label={opt.label}
            />
        ))}
        {searchable && (
            <TextField
                label={searchPlaceholder}
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{ endAdornment: <SearchIcon color="action" /> }}
                sx={{ flexGrow: 1, minWidth: '200px' }}
            />
        )}
    </Box>
);

export const ResourceListPage = ({
    resourceName,
    columns,
    api,
    dataAdapter = (response) => response,
    createPath,
    createText = 'Create New',
    searchable = false,
    filterOptions = [],
    linkComponent,
    searchPlaceholder = 'Search...',
    renderHeader = defaultRenderHeader,
    renderFilters = defaultRenderFilters,
}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rowCount, setRowCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sortModel, setSortModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState(() => 
        filterOptions.reduce((acc, opt) => ({ ...acc, [opt.name]: false }), {})
    );

    const debouncedSearch = useDebounce(searchQuery, 500);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const sort = sortModel.length > 0 ? sortModel[0].field : undefined;
            const order = sortModel.length > 0 ? sortModel[0].sort : undefined;

            const queryParams = {
                page: page + 1,
                per_page: pageSize,
                sort,
                order,
                q: debouncedSearch || undefined,
                ...filters,
            };

            const response = await api.list(queryParams);
            const adaptedResponse = dataAdapter(response);

            setData(adaptedResponse.data);
            setRowCount(adaptedResponse.meta.total);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [api, page, pageSize, sortModel, debouncedSearch, filters, dataAdapter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters(prev => ({ ...prev, [name]: checked }));
        setPage(0);
    };

    return (
        <Box>
            {renderHeader({ resourceName, createPath, createText, linkComponent })}
            
            {renderFilters({
                searchable,
                searchQuery,
                setSearchQuery,
                filterOptions,
                filters,
                handleFilterChange,
                searchPlaceholder,
            })}

            <DataTable
                rows={data}
                columns={columns}
                loading={loading}
                error={error}
                pagination
                rowCount={rowCount}
                page={page}
                onPageChange={setPage}
                pageSize={pageSize}
                onPageSizeChange={(size) => { setPageSize(size); setPage(0); }}
                sortModel={sortModel}
                onSortModelChange={(model) => { setSortModel(model); setPage(0); }}
            />
        </Box>
    );
};
