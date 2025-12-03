import React from 'react';
import { PieChart } from './PieChart';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
  },
};

const Template = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Browser Usage',
  series: [
    {
      data: [
        { id: 0, value: 10, label: 'Chrome' },
        { id: 1, value: 15, label: 'Safari' },
        { id: 2, value: 20, label: 'Firefox' },
      ],
    },
  ],
  width: 400,
  height: 200,
};
