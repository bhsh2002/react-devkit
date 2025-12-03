import React from 'react';
import { StatsGrid } from './StatsGrid';
import { StatCard } from '../StatCard';
import { LineChart } from '../charts/LineChart';
import { BarChart } from '../charts/BarChart';
import { PieChart } from '../charts/PieChart';
import { Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default {
  title: 'Layouts/StatsGrid',
  component: StatsGrid,
  tags: ['autodocs'],
};

const Template = (args) => (
  <StatsGrid {...args}>
    <Grid size={{ xs: 12, md: 4 }}>
      <StatCard
        title="Total Users"
        value="1,234"
        icon={<PeopleIcon />}
        color="primary.main"
      />
    </Grid>
    <Grid size={{ xs: 12, md: 4 }}>
      <StatCard
        title="Revenue"
        value="$45,678"
        icon={<AttachMoneyIcon />}
        color="success.main"
      />
    </Grid>
    <Grid size={{ xs: 12, md: 4 }}>
      <StatCard
        title="Growth"
        value="+12%"
        icon={<TrendingUpIcon />}
        color="secondary.main"
      />
    </Grid>
    <Grid size={{ xs: 12, md: 8 }}>
      <LineChart
        title="Revenue Trend"
        xAxis={[{ data: [1, 2, 3, 4, 5, 6], label: 'Month' }]}
        series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5], label: 'Revenue' }]}
      />
    </Grid>
    <Grid size={{ xs: 12, md: 4 }}>
      <PieChart
        title="User Distribution"
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Mobile' },
              { id: 1, value: 15, label: 'Desktop' },
              { id: 2, value: 20, label: 'Tablet' },
            ],
          },
        ]}
      />
    </Grid>
  </StatsGrid>
);

export const DashboardExample = Template.bind({});
DashboardExample.args = {
  spacing: 3,
};
