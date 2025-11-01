
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, CircularProgress, Paper, TablePagination } from '@mui/material';

const DefaultNoRowsOverlay = () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="text.secondary">لا يوجد بيانات لعرضها</Typography>
    </Box>
);

const DefaultLoadingOverlay = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
        <CircularProgress />
    </Box>
);

export const DataCard = ({
    rows = [],
    columns = [],
    getRowId = (row) => row.id,
    loading = false,
    error,
    slots = {},
    sx,
    pagination = false,
    rowCount = 0,
    page = 1,
    onPageChange = () => {},
    perPage = 10,
    onPerPageChange = () => {},
    perPageOptions = [10, 25, 100],
}) => {
    const {
        noRowsOverlay: NoRowsOverlaySlot = DefaultNoRowsOverlay,
        loadingOverlay: LoadingOverlaySlot = DefaultLoadingOverlay,
    } = slots;

    if (loading) {
        return <LoadingOverlaySlot />;
    }

    if (error) {
        return (
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography color="error">{error.message || 'An error occurred.'}</Typography>
            </Box>
        );
    }

    if (rows.length === 0) {
        return <NoRowsOverlaySlot />;
    }

    return (
        <Paper sx={sx}>
            <Grid container spacing={2}>
                {rows.map((row) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}} key={getRowId(row)}>
                        <Card>
                            <CardContent>
                                {columns.map((col) => (
                                    <Box key={col.field} sx={{ mb: 1 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {col.headerName}
                                        </Typography>
                                        <Typography variant="body1">
                                            {col.renderCell
                                                ? col.renderCell({ value: row[col.field], row, id: getRowId(row) })
                                                : row[col.field]}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {pagination && !error && rows.length > 0 && (
                <TablePagination
                    component="div"
                    count={rowCount}
                    page={page - 1}
                    onPageChange={(e, newPage) => onPageChange(newPage + 1)}
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
