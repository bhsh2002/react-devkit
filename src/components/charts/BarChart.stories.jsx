import React from 'react';
import { BarChart } from './BarChart';

export default {
  title: 'Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
  },
};

const Template = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'User Growth',
  xAxis: [{ scaleType: 'band', data: ['Q1', 'Q2', 'Q3', 'Q4'], label: 'Quarter' }],
  series: [
    {
      data: [100, 200, 150, 300],
      label: 'Users',
    },
  ],
  width: 500,
  height: 300,
};

export const Stacked = Template.bind({});
Stacked.args = {
  title: 'Traffic Sources',
  xAxis: [{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'], label: 'Month' }],
  series: [
    { data: [40, 50, 60], label: 'Organic', stack: 'total' },
    { data: [30, 40, 50], label: 'Paid', stack: 'total' },
    { data: [20, 10, 30], label: 'Social', stack: 'total' },
  ],
  width: 500,
  height: 300,
};
