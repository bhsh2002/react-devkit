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
 * @param {object} [props.sx] - @en Custom styles for the container. @ar أنماط مخصصة للحاوية.
 */
export const LineChart = ({ xAxis, series, width, height = 300, title, sx }) => {
  return (
    <Paper sx={{ p: 2, ...sx }} elevation={2}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: height }}>
        <MuiLineChart
          xAxis={xAxis}
          series={series}
          width={width}
          height={height}
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
};
