
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { ResourceListPage } from './ResourceListPage';

// Mock columns
const mockColumns = [
  { field: 'name', headerName: 'Name' },
];

describe('ResourceListPage', () => {
  test('fetches and displays data successfully', async () => {
    const mockApi = {
      list: vi.fn().mockResolvedValue({ 
        data: [{ id: 1, name: 'Test Resource' }], 
        meta: { total: 1 }
      }),
    };

    render(
      <ResourceListPage 
        resourceName="Tests" 
        columns={mockColumns} 
        api={mockApi} 
        createPath="/tests/create"
      />
    );

    // Initially, it should be loading (though it might be too fast to catch without delays)
    // Let's wait for the data to appear
    await waitFor(() => {
      expect(screen.getByText('Test Resource')).toBeInTheDocument();
    });

    // Check if the API was called
    expect(mockApi.list).toHaveBeenCalled();

    // Check for title and create button
    expect(screen.getByText('Tests')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /create new/i })).toBeInTheDocument();
  });

  test('displays an error message on fetch failure', async () => {
    const mockApi = {
      list: vi.fn().mockRejectedValue(new Error('API Error')),
    };

    render(
      <ResourceListPage 
        resourceName="Tests" 
        columns={mockColumns} 
        api={mockApi} 
      />
    );

    // Wait for the error message to be displayed in the DataTable
    await waitFor(() => {
      expect(screen.getByText(/API Error/i)).toBeInTheDocument();
    });
  });
});
