
import React from 'react';
import { DataTable } from './DataTable';
import { Chip, Box, Button } from '@mui/material';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: { disable: true } },
    columns: { control: { disable: true } },
    error: { control: { disable: true } },
  },
};

// Mock Data
const mockColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    sortable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: ({ value }) => (
      <Chip label={value} color={value === 'Active' ? 'success' : 'error'} />
    ),
  },
    {
    field: 'actions',
    headerName: 'Actions',
    align: 'center',
    renderCell: ({ row }) => (
        <Box>
            <Button size="small" onClick={() => alert(`Editing ${row.name}`)}>Edit</Button>
        </Box>
    ),
  },
];

const mockRows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Peter Jones', email: 'peter@example.com', status: 'Active' },
  { id: 4, name: 'Susan Williams', email: 'susan@example.com', status: 'Active' },
  { id: 5, name: 'David Brown', email: 'david@example.com', status: 'Inactive' },
];

// Stories
export const Default = {
  args: {
    rows: mockRows,
    columns: mockColumns,
  },
};

export const Loading = {
  args: {
    ...Default.args,
    rows: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Default.args,
    rows: [],
  },
};

export const WithPagination = {
  args: {
    ...Default.args,
    pagination: true,
    rowCount: 100, // Total rows on server
    page: 1,
    perPage: 5,
    // In a real app, onPageChange and onPerPageChange would be connected to state
    // Storybook's "actions" addon will log these events
    onPageChange: (page) => console.log('Page changed to:', page),
    onPerPageChange: (size) => console.log('Page size changed to:', size),
  },
};

export const WithFixedHeight = {
    args: {
        ...Default.args,
        rows: [...mockRows, ...mockRows, ...mockRows, ...mockRows], // more rows to show scrolling
        height: 400,
    },
};

export const WithSorting = {
    args: {
        ...WithPagination.args,
        sorting: true,
        sortModel: [{ field: 'name', sort: 'asc' }],
        onSortModelChange: (model) => console.log('Sort model changed to:', model),
    },
};
