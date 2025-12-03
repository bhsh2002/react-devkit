import React from 'react';
import { LineChart } from './LineChart';

export default {
  title: 'Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
  },
};

const Template = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Monthly Sales',
  xAxis: [{ data: [1, 2, 3, 4, 5, 6], label: 'Month' }],
  series: [
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      label: 'Sales',
    },
  ],
  width: 500,
  height: 300,
};

export const MultipleSeries = Template.bind({});
MultipleSeries.args = {
  title: 'Revenue vs Expenses',
  xAxis: [{ data: [1, 2, 3, 4, 5, 6], label: 'Month' }],
  series: [
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      label: 'Revenue',
    },
    {
      data: [1, 3, 1.5, 5, 1, 3],
      label: 'Expenses',
      color: 'red',
    },
  ],
  width: 500,
  height: 300,
};
