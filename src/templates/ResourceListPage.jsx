
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Typography, Toolbar, TextField, Switch, FormControlLabel } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { DataTable } from '../components';
import { useApi, useDebounce } from '../hooks';

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
                    {...(Link ? { component: Link, to: createPath } : { href: createPath })}
                >
                    {createText}
                </Button>
            )}
        </Toolbar>
    );
};

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
    searchPlaceholder = 'Search...',
    filterOptions = [],
    sorting = false,
    showRowNumber = true, // Added prop
    linkComponent,
    renderHeader = defaultRenderHeader,
    renderFilters = defaultRenderFilters,
}) => {
    const [rowCount, setRowCount] = useState(0);
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [sortModel, setSortModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState(() => 
        filterOptions.reduce((acc, opt) => ({ ...acc, [opt.name]: false }), {})
    );

    const debouncedSearch = useDebounce(searchQuery, 500);

    const { data, isLoading, error, mutate } = useApi(
        [resourceName, page, perPage, debouncedSearch, filters.include_deleted],
        () => api.list({ page, per_page: perPage, q: debouncedSearch, deleted_state: filters.include_deleted ? "all" : "active" }),
        { keepPreviousData: true }
    );

    useEffect(() => {
        mutate();
    }, [data]);

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
                rows={data?.items}
                columns={columns}
                loading={isLoading}
                error={error}
                pagination
                rowCount={data?.pagination.total || 0}
                page={page}
                onPageChange={setPage}
                perPage={perPage}
                onPerPageChange={(size) => { setPerPage(size); setPage(0); }}
                sorting={sorting}
                sortModel={sortModel}
                onSortModelChange={(model) => { setSortModel(model); setPage(0); }}
                showRowNumber={showRowNumber} // Pass prop down
            />
        </Box>
    );
};