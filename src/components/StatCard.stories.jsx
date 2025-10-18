
import React from 'react';
import { StatCard } from './StatCard';
import { Paid as PaidIcon } from '@mui/icons-material';

// The meta object tells Storybook about our component
export default {
  title: 'Components/StatCard', // How it will appear in the sidebar
  component: StatCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // We can define controls for our props
    icon: { control: { disable: true } }, // Disable control for the icon prop
    color: { control: 'color' }, // Use a color picker for the color prop
    value: { control: 'text' },
    title: { control: 'text' },
  },
};

// The "Primary" story
export const Primary = {
  args: {
    icon: <PaidIcon fontSize="inherit" />,
    title: 'Total Revenue',
    value: '$45,231.89',
    color: '#4caf50',
  },
};

// The "Clickable" story
export const Clickable = {
  args: {
    ...Primary.args,
    title: 'Total Clicks (Clickable)',
    value: '1,234',
    color: '#2196f3',
    onClick: () => alert('Card was clicked!'),
  },
};

// A story in Arabic
export const Arabic = {
    args: {
        icon: <PaidIcon fontSize="inherit" />,
        title: 'إجمالي الدخل',
        value: '٤٥٬٢٣١٫٨٩ ر.س',
        color: '#f44336',
    },
};
