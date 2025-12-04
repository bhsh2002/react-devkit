import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Paper,
  TablePagination,
  Skeleton,
  Button,
  LinearProgress,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import RefreshIcon from '@mui/icons-material/Refresh';

const DefaultNoRowsOverlay = () => (
  <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
    <ImageNotSupportedIcon sx={{ fontSize: 60, mb: 2, opacity: 0.5 }} />
    <Typography variant="h6">لا يوجد بيانات لعرضها</Typography>
  </Box>
);

const DefaultLoadingOverlay = () => (
  <Grid container spacing={2}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
          <Skeleton variant="rectangular" height={140} />
          <CardContent>
            <Skeleton width="60%" />
            <Skeleton width="80%" />
            <Skeleton width="40%" />
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const DefaultErrorOverlay = ({ message, onRetry }) => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
    <Typography variant="h6" color="error">
      حدث خطأ أثناء تحميل البيانات
    </Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>
      {message || 'يرجى المحاولة مرة أخرى.'}
    </Typography>
    {onRetry && (
      <Button variant="outlined" color="error" onClick={onRetry}>
        إعادة المحاولة
      </Button>
    )}
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
  onPageChange = () => { },
  perPage = 10,
  onPerPageChange = () => { },
  perPageOptions = [10, 25, 100],
  onRetry,
  renderCard,
  onRefresh,
}) => {
  const {
    noRowsOverlay: NoRowsOverlaySlot = DefaultNoRowsOverlay,
    loadingOverlay: LoadingOverlaySlot = DefaultLoadingOverlay,
    errorOverlay: ErrorOverlaySlot = DefaultErrorOverlay,
  } = slots;

  if (loading && rows.length === 0) return <LoadingOverlaySlot />;

  if (error) return <ErrorOverlaySlot message={error.message} onRetry={onRetry} />;

  if (rows.length === 0) return <NoRowsOverlaySlot />;

  return (
    <Paper sx={{ p: 2, borderRadius: 3, ...sx }}>
      {loading && rows.length > 0 && <LinearProgress sx={{ mb: 2, borderRadius: 1 }} />}
      {onRefresh && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button
            startIcon={<RefreshIcon />}
            onClick={() => onRefresh()}
            variant="outlined"
            size="small"
            disabled={loading}
          >
            تحديث
          </Button>
        </Box>
      )}
      <Grid container spacing={2}>
        {rows.map((row) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={getRowId(row)}>
            {renderCard ? (
              renderCard(row)
            ) : (
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {row.image ? (
                  <CardMedia
                    component="img"
                    height="140"
                    image={row.image}
                    alt={row.title || 'Image'}
                    sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 140,
                      bgcolor: 'grey.100',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ImageNotSupportedIcon sx={{ color: 'grey.400', fontSize: 50 }} />
                  </Box>
                )}

                <CardContent>
                  {columns.map((col) => (
                    <Box key={col.field} sx={{ mb: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {col.headerName}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {col.renderCell
                          ? col.renderCell({ value: row[col.field], row, id: getRowId(row) })
                          : row[col.field]}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            )}
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
          sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
        />
      )}
    </Paper>
  );
};
