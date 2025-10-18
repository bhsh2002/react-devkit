
import React from 'react';
import { ResourceFormPage } from './ResourceFormPage';
import { Form, TextField } from '../components/forms';
import { Button, Grid, CircularProgress, Alert } from '@mui/material';

export default {
  title: 'Templates/ResourceFormPage',
  component: ResourceFormPage,
  tags: ['autodocs'],
  argTypes: {
    onSuccess: { action: 'success' },
  },
};

// Mock Form Component
const UserFormComponent = ({ initialData, onSubmit, isSubmitting, submitError }) => (
  <Form initialValues={initialData || { name: '', email: '' }} onSubmit={onSubmit}>
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <TextField name="name" label="Full Name" fullWidth required />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField name="email" label="Email Address" type="email" fullWidth required />
      </Grid>
      {submitError && (
        <Grid size={{ xs: 12 }}>
          <Alert severity="error">{submitError.message}</Alert>
        </Grid>
      )}
      <Grid size={{ xs: 12 }}>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : 'Save Changes'}
        </Button>
      </Grid>
    </Grid>
  </Form>
);

// Mock API
const mockApi = {
  getOne: (id) => {
    console.log(`Fetching user with id: ${id}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { id: id, name: 'John Doe', email: 'john.doe@example.com' } });
      }, 1000);
    });
  },
  create: (data) => {
    console.log('Creating user with data:', data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { id: 'new-id', ...data } });
      }, 1500);
    });
  },
  update: (id, data) => {
    console.log(`Updating user ${id} with data:`, data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { id: id, ...data } });
      }, 1500);
    });
  },
};

// Stories
export const CreateMode = {
  args: {
    resourceName: 'User',
    api: mockApi,
    FormComponent: UserFormComponent,
    onSuccess: (data) => console.log('Successfully created:', data),
  },
  name: 'Create Mode',
};

export const EditMode = {
  args: {
    ...CreateMode.args,
    id: '12345',
    onSuccess: (data) => console.log('Successfully updated:', data),
  },
  name: 'Edit Mode (Loading and Success)',
};
