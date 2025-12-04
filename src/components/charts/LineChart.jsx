import React from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import { Paper, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * @en A line chart component for visualizing data trends over time or categories.
 * @ar مكون رسم بياني خطي لتصور اتجاهات البيانات بمرور الوقت أو الفئات.
 *
 * @param {object} props - The component props.
 * @param {Array} props.xAxis - @en Configuration for the x-axis, including data and labels. @ar تكوين المحور السيني، بما في ذلك البيانات والتسميات.
 * @param {Array} props.series - @en The data series to be plotted. @ar سلاسل البيانات التي سيتم رسمها.
 * @param {number} [props.width] - @en The width of the chart. @ar عرض الرسم البياني.
 * @param {number} [props.height=300] - @en The height of the chart. @ar ارتفاع الرسم البياني.
 * @param {string} [props.title] - @en The title of the chart. @ar عنوان الرسم البياني.
 * @param {boolean} [props.rtl] - @en Enable Right-to-Left support (reverses X-axis and moves Y-axis to right). @ar تفعيل دعم الاتجاه من اليمين إلى اليسار (يعكس المحور السيني وينقل المحور الصادي إلى اليمين).
 */
export const LineChart = ({ xAxis, series, width, height = 300, title, sx, rtl, rtlTickLabelOffset = 20 }) => {
  const processedXAxis = rtl
    ? xAxis.map((axis) => ({ ...axis, reverse: true }))
    : xAxis;

  return (
    <Paper sx={{ p: 2, ...sx }} elevation={2} dir={rtl ? 'rtl' : 'ltr'}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: height }}>
        <MuiLineChart
          xAxis={processedXAxis}
          yAxis={[
            {
              position: rtl ? 'right' : 'left',
              tickLabelStyle: rtl ? { transform: `translate(${rtlTickLabelOffset}px, 0)` } : undefined,
            },
          ]}
          series={series}
          width={width}
          height={height}
          margin={{ left: 50, right: 50, top: 20, bottom: 20 }}
          skipAnimation={rtl}
        />
      </Box>
    </Paper>
  );
};

LineChart.propTypes = {
  xAxis: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  sx: PropTypes.object,
  rtl: PropTypes.bool,
  rtlTickLabelOffset: PropTypes.number,
};
