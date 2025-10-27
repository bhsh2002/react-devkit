
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
 * @property {string} field - The key from the row data object.
 * @property {string} headerName - The text to display in the header.
 * @property {number} [width] - The width of the column.
 * @property {boolean} [sortable=false] - If true, the column can be sorted.
 * @property {'inherit'|'left'|'center'|'right'|'justify'} [align] - The alignment of the cell content.
 * @property {function(object): React.ReactNode} [renderCell] - A function to custom render the cell content. Receives an object with `value`, `row`, `id`, and `index`.
 */

/**
 * @typedef {object} SortModel
 * @property {string} field - The field to sort by.
 * @property {'asc'|'desc'} sort - The sort direction.
 */

/**
 * A generic and customizable data table component built on top of Material-UI.
 * 
 * @param {object} props - The component props.
 * @param {Array<object>} [props.rows=[]] - The array of data rows to display.
 * @param {Array<DataTableColumn>} [props.columns=[]] - The array of column definitions.
 * @param {function(object): any} [props.getRowId=(row => row.id)] - A function that returns a unique ID for each row.
 * @param {boolean} [props.loading=false] - If true, a loading overlay is displayed.
 * @param {Error} [props.error] - If an error object is provided, an error message is displayed.
 * @param {boolean} [props.pagination=false] - If true, pagination controls are displayed.
 * @param {number} [props.rowCount=0] - The total number of rows on the server.
 * @param {number} [props.page=0] - The current page number (0-based).
 * @param {function(number): void} [props.onPageChange] - Callback for when the page changes.
 * @param {number} [props.perPage=10] - The number of rows per page.
 * @param {function(number): void} [props.onPerPageChange] - Callback for when the page size changes.
 * @param {Array<number>} [props.perPageOptions=[5, 10, 25, 50]] - The available page size options.
 * @param {boolean} [props.sorting=false] - If true, enables column sorting.
 * @param {Array<SortModel>} [props.sortModel=[]] - The current sort model.
 * @param {function(Array<SortModel>): void} [props.onSortModelChange] - Callback for when the sort model changes.
 * @param {boolean} [props.showRowNumber=true] - If true, prepends a column with auto-incrementing row numbers.
 * @param {object} [props.slots] - An object to override default components like the toolbar or overlays.
 * @param {object} [props.slotProps] - Props to be passed to the slot components.
 * @param {object} [props.sx] - Custom styles for the root Paper component.
 */
export const DataTable = ({
    rows = [],
    columns = [],
    getRowId = (row) => row.id,
    loading = false,
    error,
    pagination = false,
    rowCount = 0,
    page = 0,
    onPageChange = () => {},
    perPage = 10,
    onPerPageChange = () => {},
    perPageOptions = [10, 25, 100],
    sorting = false,
    sortModel = [],
    onSortModelChange = () => {},
    showRowNumber = true,
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
        let newSortModel = existingSort ? (existingSort.sort === 'asc' ? [{ field, sort: 'desc' }] : []) : [{ field, sort: 'asc' }];
        onSortModelChange(newSortModel);
    };

    const currentSort = sortModel.length > 0 ? sortModel[0] : null;

    const finalColumns = [
        ...(showRowNumber ? [{
            field: '__rowNumber__',
            headerName: '#',
            width: 60,
            align: 'center',
            renderCell: ({ index }) => (page * perPage) + index + 1,
        }] : []),
        ...columns,
    ];

    return (
        <Paper sx={sx}>
            {ToolbarSlot && <Toolbar><ToolbarSlot {...(slotProps.toolbar || {})} /></Toolbar>}
            <Box sx={{ width: '100%', overflowX: 'auto' }}>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {finalColumns.map((col) => (
                                    <TableCell
                                        key={col.field}
                                        align={col.align || 'inherit'}
                                        width={col.width}
                                        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                                <TableRow><TableCell colSpan={finalColumns.length} sx={{ border: 'none' }}><LoadingOverlaySlot {...(slotProps.loadingOverlay || {})} /></TableCell></TableRow>
                            ) : error ? (
                                <TableRow><TableCell colSpan={finalColumns.length} sx={{ border: 'none', textAlign: 'center' }}><Typography color="error">{error.message || 'An error occurred.'}</Typography></TableCell></TableRow>
                            ) : rows.length === 0 ? (
                                <TableRow><TableCell colSpan={finalColumns.length} sx={{ border: 'none' }}><NoRowsOverlaySlot {...(slotProps.noRowsOverlay || {})} /></TableCell></TableRow>
                            ) : (
                                <div></div>
                                // rows.map((row, index) => (
                                //     <TableRow hover key={getRowId(row)}>
                                //         {finalColumns.map((col) => {
                                //             const value = col.field.split('.').reduce((o, i) => o?.[i], row);
                                //             return (
                                //                 <TableCell key={col.field} align={col.align || 'inherit'} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                //                     {col.renderCell
                                //                         ? col.renderCell({ value, row, id: getRowId(row), index })
                                //                         : value}
                                //                 </TableCell>
                                //             );
                                //         })}
                                //     </TableRow>
                                // ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {pagination && !error && rows.length > 0 && (
                <TablePagination
                    component="div"
                    count={rowCount}
                    page={page}
                    onPageChange={(e, newPage) => onPageChange(newPage)}
                    rowsPerPage={perPage}
                    onRowsPerPageChange={(e) => onPerPageChange(parseInt(e.target.value, 10))}
                    rowsPerPageOptions={perPageOptions}
                    showFirstButton
                    showLastButton
                    labelRowsPerPage={null}
                    labelDisplayedRows={({ from, to, count }) => `${from} - ${to} | ${count}`}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            )}
        </Paper>
    );
};
