
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { ResourceFormPage } from './ResourceFormPage';
import { Form, TextField } from '../components/forms';
import { Button } from '@mui/material';

// Mock Form Component
const MockFormComponent = ({ initialData, onSubmit, isSubmitting }) => (
  <Form initialValues={initialData || { name: '' }} onSubmit={onSubmit}>
    <TextField name="name" label="Name" />
    <Button type="submit" disabled={isSubmitting}>Submit</Button>
  </Form>
);

describe('ResourceFormPage', () => {
  test('renders in create mode and handles submission', async () => {
    const mockApi = {
      create: vi.fn().mockResolvedValue({ data: { id: 'new', name: 'New Resource' } }),
    };
    const onSuccess = vi.fn();

    render(
      <ResourceFormPage 
        resourceName="Resource" 
        api={mockApi} 
        FormComponent={MockFormComponent} 
        onSuccess={onSuccess}
      />
    );

    // Check title
    expect(screen.getByText(/create resource/i)).toBeInTheDocument();

    // Fill and submit form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'New Resource' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for API calls
    await waitFor(() => {
      expect(mockApi.create).toHaveBeenCalledWith({ name: 'New Resource' });
    });

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith({ id: 'new', name: 'New Resource' });
    });
  });

  test('renders in edit mode, fetches data, and handles update', async () => {
    const mockApi = {
      getOne: vi.fn().mockResolvedValue({ data: { id: '1', name: 'Existing Resource' } }),
      update: vi.fn().mockResolvedValue({ data: { id: '1', name: 'Updated Resource' } }),
    };
    const onSuccess = vi.fn();

    render(
      <ResourceFormPage 
        resourceName="Resource" 
        id="1"
        api={mockApi} 
        FormComponent={MockFormComponent} 
        onSuccess={onSuccess}
      />
    );

    // Check that it fetches data and populates the form
    await waitFor(() => {
      expect(mockApi.getOne).toHaveBeenCalledWith('1');
      expect(screen.getByLabelText(/name/i).value).toBe('Existing Resource');
    });

    // Change value and submit
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Updated Resource' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockApi.update).toHaveBeenCalledWith('1', { name: 'Updated Resource' });
    });

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith({ id: '1', name: 'Updated Resource' });
    });
  });
});
