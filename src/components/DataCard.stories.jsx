
import React from 'react';
import { DataCard } from './DataCard';
import { Chip, Box, Button } from '@mui/material';

export default {
  title: 'Components/DataCard',
  component: DataCard,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: { disable: true } },
    columns: { control: { disable: true } },
    error: { control: { disable: true } },
  },
};

// Mock Data
const mockColumns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'status',
    headerName: 'Status',
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
