import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Typography, Toolbar, TextField, Switch, FormControlLabel } from '@mui/material';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { DataTable } from '../components';
import { useDebounce } from '../hooks/useDebounce'; // Assuming a debounce hook exists

/**
 * @typedef {import('../components').DataTableColumn} DataTableColumn
 */

/**
 * @typedef {object} FilterOption
 * @property {string} name - The query parameter name for the filter.
 * @property {string} label - The user-facing label for the filter switch.
 */

/**
 * A powerful page template for listing resources. It handles data fetching, pagination, sorting, 
 * searching, and filtering, and displays the data in a DataTable.
 * 
 * @param {object} props - The component props.
 * @param {string} props.resourceName - The name of the resource for the page title.
 * @param {Array<DataTableColumn>} props.columns - Column definitions for the DataTable.
 * @param {object} props.api - API object with a `list` method.
 * @param {function(object): {data: Array<object>, meta: object}} [props.dataAdapter] - A function to adapt the API response to the expected format.
 * @param {string} [props.createPath] - Path for the "Create New" button. If provided, the button is shown.
 * @param {string} [props.createText] - Text for the create button.
 * @param {boolean} [props.searchable=false] - If true, a search input is displayed.
 * @param {Array<FilterOption>} [props.filterOptions=[]] - An array of filter options to display as switches.
 */
export const ResourceListPage = ({
    resourceName,
    columns,
    api,
    dataAdapter = (response) => response, // Default adapter does nothing
    createPath,
    createText = 'Create New',
    searchable = false,
    filterOptions = [],
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
            <Toolbar sx={{ p: '0 !important', mb: 2, display: 'flex', flexWrap: 'wrap' }}>
                <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                    {resourceName}
                </Typography>
                {createPath && (
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        href={createPath}
                    >
                        {createText}
                    </Button>
                )}
            </Toolbar>

            <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                {searchable && (
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{ endAdornment: <SearchIcon color="action" /> }}
                        sx={{ flexGrow: 1, minWidth: '200px' }}
                    />
                )}
                {filterOptions.map(opt => (
                    <FormControlLabel
                        key={opt.name}
                        control={<Switch checked={filters[opt.name]} onChange={handleFilterChange} name={opt.name} />}
                        label={opt.label}
                    />
                ))}
            </Box>

            <DataTable
                rows={data}
                columns={columns}
                loading={loading}
                error={error}
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