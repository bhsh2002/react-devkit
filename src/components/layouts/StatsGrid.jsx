import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * @en A grid layout component for displaying statistics cards and charts.
 * @ar مكون تخطيط شبكي لعرض بطاقات الإحصائيات والرسوم البيانية.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - @en The content to be displayed in the grid. @ar المحتوى الذي سيتم عرضه في الشبكة.
 * @param {number} [props.spacing=2] - @en The spacing between grid items. @ar التباعد بين عناصر الشبكة.
 * @param {object} [props.sx] - @en Custom styles for the grid container. @ar أنماط مخصصة لحاوية الشبكة.
 */
export const StatsGrid = ({ children, spacing = 2, sx }) => {
  return (
    <Grid container spacing={spacing} sx={sx}>
      {children}
    </Grid>
  );
};

StatsGrid.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
  sx: PropTypes.object,
};
