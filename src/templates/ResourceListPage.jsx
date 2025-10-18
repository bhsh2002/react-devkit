
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Typography, Toolbar } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { DataTable } from '../components';

/**
 * @typedef {import('../components').DataTableColumn} DataTableColumn
 */

/**
 * @typedef {object} ListApi
 * @property {function(object): Promise<object>} list - @en A function that fetches a list of resources. It should accept pagination and sorting parameters and return a promise that resolves to an object like `{ data: [], meta: { total: 0 } }`. @ar دالة تجلب قائمة من الموارد. يجب أن تقبل معاملات الترقيم والفرز وتُرجع Promise يتم حله إلى كائن مثل `{ data: [], meta: { total: 0 } }`.
 */

/**
 * @en A page template for listing a resource. It handles data fetching, pagination, sorting, and displays the data in a DataTable. It's a "smart" component that encapsulates the logic for displaying a resource list.
 * @ar قالب صفحة لعرض قائمة من الموارد. يتعامل مع جلب البيانات، والترقيم، والفرز، ويعرض البيانات في مكون DataTable. إنه "مكون ذكي" يغلف منطق عرض قائمة الموارد.
 *
 * @param {object} props - The component props.
 * @param {string} props.resourceName - @en The name of the resource, used for the page title (e.g., "Products", "Users"). @ar اسم المورد، يُستخدم لعنوان الصفحة (مثل "المنتجات"، "المستخدمون").
 * @param {Array<DataTableColumn>} props.columns - @en The column definitions to be passed to the DataTable. @ar تعريفات الأعمدة التي سيتم تمريرها إلى DataTable.
 * @param {ListApi} props.api - @en An API object containing the `list` method for fetching data. @ar كائن API يحتوي على دالة `list` لجلب البيانات.
 * @param {string} [props.createPath] - @en The path to the resource creation page. If provided, a "Create New" button will be displayed. @ar المسار إلى صفحة إنشاء المورد. إذا تم توفيره، سيتم عرض زر "إنشاء جديد".
 */
export const ResourceListPage = ({
    resourceName,
    columns,
    api,
    createPath,
}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rowCount, setRowCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sortModel, setSortModel] = useState([]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const sort = sortModel.length > 0 ? sortModel[0].field : undefined;
            const order = sortModel.length > 0 ? sortModel[0].sort : undefined;

            const response = await api.list({ 
                page: page + 1, // API might be 1-based
                per_page: pageSize,
                sort,
                order,
            });

            setData(response.data); // Assuming API returns { data: [], meta: { total: ... } }
            setRowCount(response.meta.total);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [api, page, pageSize, sortModel]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(0); // Reset to first page
    };

    const handleSortModelChange = (newSortModel) => {
        setSortModel(newSortModel);
        setPage(0); // Reset to first page
    };

    return (
        <Box>
            <Toolbar sx={{ p: '0 !important', mb: 2 }}>
                <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                    {resourceName}
                </Typography>
                {createPath && (
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        component="a" // Or Link from react-router-dom
                        href={createPath}
                    >
                        Create New
                    </Button>
                )}
            </Toolbar>

            <DataTable
                rows={data}
                columns={columns}
                loading={loading}
                error={error}
                // Pagination
                pagination
                rowCount={rowCount}
                page={page}
                onPageChange={handlePageChange}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                // Sorting
                sorting
                sortModel={sortModel}
                onSortModelChange={handleSortModelChange}
            />
        </Box>
    );
};
