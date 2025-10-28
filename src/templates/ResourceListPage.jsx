














import React, { useState, useCallback } from 'react';







import { Box, Button, Typography, Toolbar } from '@mui/material';







import { Add as AddIcon } from '@mui/icons-material';







import { DataTable } from '../components';







import { FilterBar } from '../components/filters/FilterBar';







import { useApi } from '../hooks';















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















export const ResourceListPage = ({







    resourceName,







    columns,







    api,







    dataAdapter = (response) => response,







    createPath,







    createText = 'Create New',







    filterOptions = [],







    sorting = false,







    showRowNumber = true,







    linkComponent,







    renderHeader = defaultRenderHeader,







}) => {







    const [page, setPage] = useState(1);







    const [perPage, setPerPage] = useState(10);







    const [sortModel, setSortModel] = useState([]);







    const [filters, setFilters] = useState({});















    const apiParams = { page, per_page: perPage, ...filters };







    if (sortModel.length > 0) {







        apiParams.sort_by = sortModel[0].field;







        apiParams.sort_order = sortModel[0].sort;







    }















    const { data, isLoading, error } = useApi(







        [resourceName, apiParams],







        () => api.list(apiParams),







        { keepPreviousData: true }







    );















    const handleFilterChange = useCallback((name, value) => {







        setPage(1);







        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));







    }, []);















    return (







        <Box>







            {renderHeader({ resourceName, createPath, createText, linkComponent })}







            







            <FilterBar filterOptions={filterOptions} filters={filters} onFilterChange={handleFilterChange} />















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







                onPerPageChange={(size) => { setPerPage(size); setPage(1); }}







                sorting={sorting}







                sortModel={sortModel}







                onSortModelChange={(model) => { setSortModel(model); setPage(1); }}







                showRowNumber={showRowNumber}







            />







        </Box>







    );







};












