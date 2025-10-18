
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { StatCard } from './StatCard';
import { Paid as PaidIcon } from '@mui/icons-material';

describe('StatCard', () => {
  test('renders the title, value, and icon', () => {
    const title = 'Total Revenue';
    const value = '$50,000';

    render(<StatCard title={title} value={value} icon={<PaidIcon />} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Check if the value is rendered
    const valueElement = screen.getByText(value);
    expect(valueElement).toBeInTheDocument();

    // Check if the icon container is rendered
    const iconContainer = screen.getByTestId('statcard-icon');
    expect(iconContainer).toBeInTheDocument();

    // Check that the icon itself is rendered within the container
    expect(iconContainer.querySelector('svg')).toBeInTheDocument();
  });
});
