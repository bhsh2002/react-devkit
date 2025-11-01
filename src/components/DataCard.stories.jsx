
import React from 'react';
import { DataCard } from './DataCard';
import { Chip, Box, Button, Card, CardMedia, CardContent, Typography } from '@mui/material';

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

export const CustomCard = {
  args: {
    ...Default.args,
    renderCard: (row) => (
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={`https://i.pravatar.cc/150?u=${row.id}`}
          alt={row.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {row.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {row.email}
          </Typography>
        </CardContent>
      </Card>
    ),
  },
};
