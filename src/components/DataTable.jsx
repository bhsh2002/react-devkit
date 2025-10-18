
import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TableSortLabel,
    Typography,
    CircularProgress,
    Toolbar,
} from '@mui/material';

const DefaultNoRowsOverlay = () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="text.secondary">No rows</Typography>
    </Box>
);

const DefaultLoadingOverlay = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
        <CircularProgress />
    </Box>
);

/**
 * @typedef {object} DataTableColumn
 * @property {string} field - @en The key from the row data object. @ar المفتاح من كائن بيانات الصف.
 * @property {string} headerName - @en The text to display in the header. @ar النص الذي سيُعرض في رأس الجدول.
 * @property {number} [width] - @en The width of the column. @ar عرض العمود.
 * @property {boolean} [sortable=false] - @en If true, the column can be sorted. @ar إذا كانت true، يمكن فرز العمود.
 * @property {'inherit'|'left'|'center'|'right'|'justify'} [align] - @en The alignment of the cell content. @ar محاذاة محتوى الخلية.
 * @property {function(object): React.ReactNode} [renderCell] - @en A function to custom render the cell content. Receives an object with `value`, `row`, and `id`. @ar دالة لتخصيص عرض محتوى الخلية. تستقبل كائنًا يحتوي على `value` و `row` و `id`.
 */

/**
 * @typedef {object} SortModel
 * @property {string} field - @en The field to sort by. @ar الحقل الذي سيتم الفرز بناءً عليه.
 * @property {'asc'|'desc'} sort - @en The sort direction. @ar اتجاه الفرز.
 */

/**
 * @en A generic and customizable data table component built on top of Material-UI. It supports server-side pagination, sorting, and custom cell rendering.
 * @ar مكون جدول بيانات عام وقابل للتخصيص مبني فوق Material-UI. يدعم الترقيم من جهة الخادم، والفرز، وعرض الخلايا المخصصة.
 *
 * @param {object} props - The component props.
 * @param {Array<object>} [props.rows=[]] - @en The array of data rows to display. @ar مصفوفة صفوف البيانات لعرضها.
 * @param {Array<DataTableColumn>} [props.columns=[]] - @en The array of column definitions. @ar مصفوفة تعريف الأعمدة.
 * @param {function(object): any} [props.getRowId=(row => row.id)] - @en A function that returns a unique ID for each row. @ar دالة تُرجع معرفًا فريدًا لكل صف.
 * @param {boolean} [props.loading=false] - @en If true, a loading overlay is displayed. @ar إذا كانت true، يتم عرض غطاء التحميل.
 * @param {Error} [props.error] - @en If an error object is provided, an error message is displayed. @ar إذا تم توفير كائن خطأ، يتم عرض رسالة خطأ.
 * @param {boolean} [props.pagination=false] - @en If true, pagination controls are displayed. @ar إذا كانت true، يتم عرض عناصر التحكم في الترقيم.
 * @param {number} [props.rowCount=0] - @en The total number of rows on the server. @ar العدد الإجمالي للصفوف على الخادم.
 * @param {number} [props.page=0] - @en The current page number (0-based). @ar رقم الصفحة الحالي (يبدأ من 0).
 * @param {function(number): void} [props.onPageChange] - @en Callback for when the page changes. @ar دالة استدعاء عند تغيير الصفحة.
 * @param {number} [props.pageSize=10] - @en The number of rows per page. @ar عدد الصفوف في كل صفحة.
 * @param {function(number): void} [props.onPageSizeChange] - @en Callback for when the page size changes. @ar دالة استدعاء عند تغيير حجم الصفحة.
 * @param {Array<number>} [props.pageSizeOptions=[5, 10, 25, 50]] - @en The available page size options. @ar خيارات حجم الصفحة المتاحة.
 * @param {boolean} [props.sorting=false] - @en If true, enables column sorting. @ar إذا كانت true، يتم تمكين فرز الأعمدة.
 * @param {Array<SortModel>} [props.sortModel=[]] - @en The current sort model. @ar نموذج الفرز الحالي.
 * @param {function(Array<SortModel>): void} [props.onSortModelChange] - @en Callback for when the sort model changes. @ar دالة استدعاء عند تغيير نموذج الفرز.
 * @param {object} [props.slots] - @en An object to override default components like the toolbar or overlays. @ar كائن لتجاوز المكونات الافتراضية مثل شريط الأدوات أو الأغطية.
 * @param {object} [props.slotProps] - @en Props to be passed to the slot components. @ar الخصائص التي سيتم تمريرها إلى مكونات الـ slot.
 * @param {object} [props.sx] - @en Custom styles for the root Paper component. @ar أنماط مخصصة لمكون Paper الجذري.
 */
export const DataTable = ({
    // Data
    rows = [],
    columns = [],
    getRowId = (row) => row.id,

    // State
    loading = false,
    error,

    // Pagination
    pagination = false,
    rowCount = 0,
    page = 0,
    onPageChange = () => {},
    pageSize = 10,
    onPageSizeChange = () => {},
    pageSizeOptions = [5, 10, 25, 50],

    // Sorting
    sorting = false,
    sortModel = [],
    onSortModelChange = () => {},

    // Customization
    slots = {},
    slotProps = {},
    sx,
}) => {
    const {
        toolbar: ToolbarSlot,
        noRowsOverlay: NoRowsOverlaySlot = DefaultNoRowsOverlay,
        loadingOverlay: LoadingOverlaySlot = DefaultLoadingOverlay,
    } = slots;

    const handleSortClick = (field) => {
        if (!sorting) return;

        const existingSort = sortModel.find((s) => s.field === field);
        let newSortModel;

        if (!existingSort) {
            newSortModel = [{ field, sort: 'asc' }];
        } else if (existingSort.sort === 'asc') {
            newSortModel = [{ field, sort: 'desc' }];
        } else {
            newSortModel = [];
        }
        onSortModelChange(newSortModel);
    };

    const currentSort = sortModel.length > 0 ? sortModel[0] : null;

    return (
        <Paper sx={sx}>
            {ToolbarSlot && (
                <Toolbar>
                    <ToolbarSlot {...(slotProps.toolbar || {})} />
                </Toolbar>
            )}
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell
                                    key={col.field}
                                    align={col.align || 'inherit'}
                                    width={col.width}
                                    sortDirection={currentSort?.field === col.field ? currentSort.sort : false}
                                >
                                    {col.sortable && sorting ? (
                                        <TableSortLabel
                                            active={currentSort?.field === col.field}
                                            direction={currentSort?.field === col.field ? currentSort.sort : 'asc'}
                                            onClick={() => handleSortClick(col.field)}
                                        >
                                            {col.headerName}
                                        </TableSortLabel>
                                    ) : (
                                        col.headerName
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} sx={{ border: 'none' }}>
                                    <LoadingOverlaySlot {...(slotProps.loadingOverlay || {})} />
                                </TableCell>
                            </TableRow>
                        ) : error ? (
                             <TableRow>
                                <TableCell colSpan={columns.length} sx={{ border: 'none', textAlign: 'center' }}>
                                     <Typography color="error">
                                        {error.message || 'An error occurred.'}
                                     </Typography>
                                </TableCell>
                            </TableRow>
                        ) : rows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} sx={{ border: 'none' }}>
                                    <NoRowsOverlaySlot {...(slotProps.noRowsOverlay || {})} />
                                </TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row) => (
                                <TableRow hover key={getRowId(row)}>
                                    {columns.map((col) => {
                                        const value = col.field.split('.').reduce((o, i) => o?.[i], row);
                                        return (
                                            <TableCell key={col.field} align={col.align || 'inherit'}>
                                                {col.renderCell
                                                    ? col.renderCell({ value, row, id: getRowId(row) })
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {pagination && !error && (
                <TablePagination
                    component="div"
                    count={rowCount}
                    page={page}
                    onPageChange={(e, newPage) => onPageChange(newPage)}
                    rowsPerPage={pageSize}
                    onRowsPerPageChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
                    rowsPerPageOptions={pageSizeOptions}
                />
            )}
        </Paper>
    );
};
