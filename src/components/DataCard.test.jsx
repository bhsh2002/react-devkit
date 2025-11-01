
import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataCard } from './DataCard';

const mockColumns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
];

const mockRows = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

describe('DataCard', () => {
  it('renders without crashing', () => {
    render(<DataCard rows={mockRows} columns={mockColumns} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('displays a loading spinner when loading', () => {
    render(<DataCard loading />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('displays an error message on error', () => {
    render(<DataCard error={{ message: 'An error occurred' }} />);
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  it('displays a no rows overlay when there is no data', () => {
    render(<DataCard rows={[]} columns={mockColumns} />);
    expect(screen.getByText('No items to display')).toBeInTheDocument();
  });
});
