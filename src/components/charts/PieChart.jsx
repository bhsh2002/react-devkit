import React from 'react';
import { PieChart as MuiPieChart } from '@mui/x-charts/PieChart';
import { Paper, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * @en A pie chart component for showing proportions of a whole.
 * @ar مكون رسم بياني دائري لإظهار نسب جزء من الكل.
 *
 * @param {object} props - The component props.
 * @param {Array} props.series - @en The data series to be plotted. Should contain objects with `id`, `value`, and `label`. @ar سلاسل البيانات التي سيتم رسمها. يجب أن تحتوي على كائنات بها `id` و `value` و `label`.
 * @param {number} [props.width] - @en The width of the chart. @ar عرض الرسم البياني.
 * @param {number} [props.height=300] - @en The height of the chart. @ar ارتفاع الرسم البياني.
 * @param {string} [props.title] - @en The title of the chart. @ar عنوان الرسم البياني.
 * @param {boolean} [props.rtl] - @en Enable Right-to-Left support for layout. @ar تفعيل دعم الاتجاه من اليمين إلى اليسار للتخطيط.
 */
export const PieChart = ({ series, width, height = 300, title, sx, rtl }) => {
  return (
    <Paper sx={{ p: 6, ...sx }} elevation={2} dir={rtl ? 'rtl' : 'ltr'}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: height, display: 'flex', justifyContent: 'center' }}>
        <MuiPieChart
          series={series}
          width={width}
          height={height}
          slotProps={{
            legend: {
              direction: 'row',
              position: { vertical: 'bottom', horizontal: 'middle' },
            },
          }}
        />
      </Box>
    </Paper>
  );
};

PieChart.propTypes = {
  series: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  sx: PropTypes.object,
  rtl: PropTypes.bool,
};
