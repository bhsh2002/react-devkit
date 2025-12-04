
import React, { useState, useCallback, useEffect, use } from 'react';
import { Box, Button, Typography, Toolbar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Add as AddIcon, ViewList as ViewListIcon, ViewModule as ViewModuleIcon } from '@mui/icons-material';
import { DataTable, DataCard } from '../components';
import { FilterBar } from '../components/filters/FilterBar';
import { useApi } from '../hooks';

const defaultRenderHeader = ({ resourceName, createPath, createText, linkComponent, view, onViewChange }) => {
    const Link = linkComponent;
    return (
        <Toolbar sx={{ p: '0 !important', mb: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
            <Typography variant="h4" component="h1" sx={{ flexGrow: 1, mb: { xs: 2, sm: 0 } }}>
                {resourceName}
            </Typography>
            {view && <ToggleButtonGroup
                value={view}
                exclusive
                onChange={onViewChange}
                aria-label="view"
                sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}
            >
                <ToggleButton value="table" aria-label="table view">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="card" aria-label="card view">
                    <ViewModuleIcon />
                </ToggleButton>
            </ToggleButtonGroup>}
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

export const ResourceListPage = ({
    resourceName,
    columns,
    api,
    createPath,
    createText = 'Create New',
    filterOptions = [],
    searchable = false,
    searchPlaceholder = 'Search...',
    sorting = false,
    showRowNumber = true,
    height,
    linkComponent,
    renderHeader = defaultRenderHeader,
    requestAdapter = (params) => params,
    responseAdapter = (data) => data,
    autoRefresh = false,
    defaultView = null,
    renderCard,
    resetTrigger,
    onRefresh,
}) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [sortModel, setSortModel] = useState([]);
    const [filters, setFilters] = useState({});
    const [view, setView] = useState(defaultView);
    const [manualLoading, setManualLoading] = useState(false);

    const baseApiParams = { page, per_page: perPage, ...filters };
    if (sortModel.length > 0) {
        baseApiParams.sort_by = sortModel[0].field;
        baseApiParams.sort_order = sortModel[0].sort;
    }

    const apiParams = requestAdapter(baseApiParams);

    const { data, isLoading, error, mutate } = useApi(
        [resourceName, apiParams],
        async () => {
            const response = await api.list(apiParams);
            return responseAdapter(response);
        },
        { keepPreviousData: true }
    );

    useEffect(() => {
        const interval = autoRefresh ? setInterval(() => {
            mutate();
        }, autoRefresh) : null;

        return () => {
            if (interval) clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        mutate();
    }, [apiParams, mutate, resetTrigger]);

    const handleFilterChange = useCallback((name, value) => {
        setPage(1);
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    }, []);

    const handleViewChange = (event, nextView) => {
        if (nextView !== null) {
            setView(nextView);
        }
    };

    const handleRefresh = async () => {
        setManualLoading(true);
        await mutate();
        setManualLoading(false);
    };

    const finalFilterOptions = [
        ...(searchable ? [{ name: 'q', label: searchPlaceholder, type: 'search' }] : []),
        ...filterOptions,
    ];

    return (
        <Box>
            {renderHeader({ resourceName, createPath, createText, linkComponent, view, onViewChange: handleViewChange })}

            <FilterBar filterOptions={finalFilterOptions} filters={filters} onFilterChange={handleFilterChange} />

            {!view || view === 'table' ? (
                <DataTable
                    rows={data?.items || []}
                    columns={columns}
                    loading={isLoading || manualLoading}
                    error={error}
                    pagination={data && data.pagination}
                    rowCount={(data && data.pagination) ? data.pagination.total : 0}
                    page={page}
                    onPageChange={setPage}
                    perPage={perPage}
                    onPerPageChange={(size) => { setPerPage(size); setPage(1); }}
                    sorting={sorting}
                    sortModel={sortModel}
                    onSortModelChange={(model) => { setSortModel(model); setPage(1); }}
                    showRowNumber={showRowNumber}
                    height={height}
                    onRefresh={onRefresh || handleRefresh}
                />
            ) : view === 'card' ? (
                <DataCard
                    rows={data?.items || []}
                    columns={columns}
                    loading={isLoading || manualLoading}
                    error={error}
                    pagination={data && data.pagination}
                    rowCount={(data && data.pagination) ? data.pagination.total : 0}
                    page={page}
                    onPageChange={setPage}
                    perPage={perPage}
                    onPerPageChange={(size) => { setPerPage(size); setPage(1); }}
                    renderCard={renderCard}
                    onRefresh={onRefresh || handleRefresh}
                />
            ) : null}
        </Box>
    );
};