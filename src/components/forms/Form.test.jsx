
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import * as yup from 'yup';
import { Form } from './Form';
import { TextField } from './TextField';
import { FileUploadField } from './FileUploadField';
import { Button } from '@mui/material';

describe('Form Components', () => {
  test('TextField updates form state and submits correctly', () => {
    const onSubmit = vi.fn();
    render(
      <Form onSubmit={onSubmit}>
        <TextField name="username" label="Username" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const input = screen.getByLabelText(/username/i);
    fireEvent.change(input, { target: { value: 'testuser' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ username: 'testuser' });
  });

  test('FileUploadField updates form state with a file', () => {
    const onSubmit = vi.fn();
    const mockFile = new File(['hello'], 'hello.png', { type: 'image/png' });

    render(
      <Form onSubmit={onSubmit}>
        <FileUploadField name="avatar" label="Upload Avatar" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const input = screen.getByTestId('file-upload-input');
    fireEvent.change(input, { target: { files: [mockFile] } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ avatar: mockFile });
  });

  test('Form renders with initial values', () => {
    const initialValues = { username: 'initialUser' };
    render(
      <Form initialValues={initialValues}>
        <TextField name="username" label="Username" />
      </Form>
    );

    const input = screen.getByLabelText(/username/i);
    expect(input.value).toBe('initialUser');
  });

  test('displays validation errors on failed submission', async () => {
    const onSubmit = vi.fn();
    const validationSchema = yup.object({
      username: yup.string().required('Username is required'),
    });

    render(
      <Form onSubmit={onSubmit} validationSchema={validationSchema}>
        <TextField name="username" label="Username" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    // Submit without filling the form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Check that the error message appears
    const errorMessage = await screen.findByText('Username is required');
    expect(errorMessage).toBeInTheDocument();

    // Check that onSubmit was NOT called
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
