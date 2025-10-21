
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Form } from './Form';
import { AutocompleteField } from './AutocompleteField';
import { Button } from '@mui/material';

// Mock options
const mockOptions = [
  { label: 'Option 1', id: 1 },
  { label: 'Option 2', id: 2 },
];

// Mock fetch function
const mockFetchOptions = vi.fn().mockResolvedValue(mockOptions);

describe('AutocompleteField', () => {
  test('renders correctly and fetches options', async () => {
    render(
      <Form onSubmit={() => {}}>
        <AutocompleteField 
          name="testField"
          label="Test Field"
          fetchOptions={mockFetchOptions}
          getOptionLabel={(option) => option.label}
        />
      </Form>
    );

    const input = screen.getByLabelText(/test field/i);
    fireEvent.change(input, { target: { value: 'Opt' } });

    // Check if fetchOptions was called
    expect(mockFetchOptions).toHaveBeenCalledWith('Opt');

    // Check if options appear
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  test('updates form state on selection', async () => {
    const onSubmit = vi.fn();
    render(
      <Form onSubmit={onSubmit}>
        <AutocompleteField 
          name="testField"
          label="Test Field"
          fetchOptions={mockFetchOptions}
          getOptionLabel={(option) => option.label}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const input = screen.getByLabelText(/test field/i);
    fireEvent.change(input, { target: { value: 'Opt' } });

    // Select an option
    await waitFor(() => {
        fireEvent.click(screen.getByText('Option 1'));
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Check if onSubmit was called with the correct value
    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ testField: mockOptions[0] });
    });
  });
});
