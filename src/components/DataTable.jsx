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

    // Features
    showRowNumber = false,

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

    const finalColumns = [
        ...(showRowNumber ? [{
            field: '__rowNumber__',
            headerName: '#',
            width: 60,
            align: 'center',
            renderCell: ({ index }) => (page * pageSize) + index + 1,
        }] : []),
        ...columns,
    ];

    return (
        <Paper sx={sx}>
            {ToolbarSlot && (
                <Toolbar>
                    <ToolbarSlot {...(slotProps.toolbar || {})} />
                </Toolbar>
            )}
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
                                <TableRow>
                                    <TableCell colSpan={finalColumns.length} sx={{ border: 'none' }}>
                                        <LoadingOverlaySlot {...(slotProps.loadingOverlay || {})} />
                                    </TableCell>
                                </TableRow>
                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={finalColumns.length} sx={{ border: 'none', textAlign: 'center' }}>
                                        <Typography color="error">{error.message || 'An error occurred.'}</Typography>
                                    </TableCell>
                                </TableRow>
                            ) : rows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={finalColumns.length} sx={{ border: 'none' }}>
                                        <NoRowsOverlaySlot {...(slotProps.noRowsOverlay || {})} />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows.map((row, index) => (
                                    <TableRow hover key={getRowId(row)}>
                                        {finalColumns.map((col) => {
                                            const value = col.field.split('.').reduce((o, i) => o?.[i], row);
                                            return (
                                                <TableCell key={col.field} align={col.align || 'inherit'} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {col.renderCell
                                                        ? col.renderCell({ value, row, id: getRowId(row), index })
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
            </Box>
            {pagination && !error && rows.length > 0 && (
                <TablePagination
                    component="div"
                    count={rowCount}
                    page={page}
                    onPageChange={(e, newPage) => onPageChange(newPage)}
                    rowsPerPage={pageSize}
                    onRowsPerPageChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
                    rowsPerPageOptions={pageSizeOptions}
                    showFirstButton
                    showLastButton
                    labelRowsPerPage={null}
                    labelDisplayedRows={({ from, to, count }) => `${from} - ${to} من ${count}`}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            )}
        </Paper>
    );
};