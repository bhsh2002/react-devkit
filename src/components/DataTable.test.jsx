
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { DataTable } from './DataTable';

// Mock Data
const mockColumns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', sortable: true },
  { field: 'email', headerName: 'Email' },
];

const mockRows = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

describe('DataTable', () => {
  test('renders headers and rows correctly', () => {
    render(<DataTable columns={mockColumns} rows={mockRows} />);

    // Check for headers
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();

    // Check for row content
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
  });

  test('displays a loading overlay when loading is true', () => {
    render(<DataTable columns={mockColumns} rows={[]} loading={true} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('displays a "No rows" message when there are no rows', () => {
    render(<DataTable columns={mockColumns} rows={[]} />);
    expect(screen.getByText('No rows')).toBeInTheDocument();
  });

  test('handles pagination correctly', () => {
    const onPageChange = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        rows={mockRows}
        pagination
        page={1}
        perPage={2}
        perPageOptions={[2, 10, 25, 100]}
        rowCount={10}
        onPageChange={onPageChange}
      />
    );

    // Find the "next page" button and click it
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    fireEvent.click(nextPageButton);

    // Expect the callback to have been called with the new page number
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('handles sorting correctly', () => {
    const onSortModelChange = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        rows={mockRows}
        sorting
        sortModel={[]}
        onSortModelChange={onSortModelChange}
      />
    );

    // Find the sortable header and click it
    const sortableHeader = screen.getByText('Name');
    fireEvent.click(sortableHeader);

    // Expect the callback to be called with the new sort model
    expect(onSortModelChange).toHaveBeenCalledWith([{ field: 'name', sort: 'asc' }]);
  });
});
