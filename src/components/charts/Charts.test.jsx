import React from 'react';
import { render, screen } from '@testing-library/react';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';
import { describe, it, expect, vi } from 'vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Chart Components', () => {
  it('renders LineChart without crashing', () => {
    render(
      <LineChart
        xAxis={[{ data: [1, 2, 3], label: 'X' }]}
        series={[{ data: [1, 2, 3], label: 'Y' }]}
        title="Test Line Chart"
      />
    );
    expect(screen.getByText('Test Line Chart')).toBeInTheDocument();
  });

  it('renders BarChart without crashing', () => {
    render(
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['A', 'B'], label: 'X' }]}
        series={[{ data: [1, 2], label: 'Y' }]}
        title="Test Bar Chart"
      />
    );
    expect(screen.getByText('Test Bar Chart')).toBeInTheDocument();
  });

  it('renders PieChart without crashing', () => {
    render(
      <PieChart
        series={[{ data: [{ id: 0, value: 10, label: 'A' }] }]}
        title="Test Pie Chart"
      />
    );
    expect(screen.getByText('Test Pie Chart')).toBeInTheDocument();
  });
});
