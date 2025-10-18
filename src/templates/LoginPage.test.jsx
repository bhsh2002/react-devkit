
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  test('renders the login form correctly', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('calls onSubmit with email and password when submitted', async () => {
    const onSubmit = vi.fn();
    render(<LoginPage onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ 
          email: 'test@example.com', 
          password: 'password123' 
        });
    });
  });

  test('displays an error message when error prop is provided', () => {
    const error = new Error('Invalid credentials');
    render(<LoginPage error={error} />);
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  test('disables the button and shows a spinner when isSubmitting is true', () => {
    render(<LoginPage isSubmitting={true} />);
    // In the submitting state, the button text is replaced by a spinner,
    // so we can't query by name. We query by role and check its state.
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('does not submit when validation fails', async () => {
    const onSubmit = vi.fn();
    render(<LoginPage onSubmit={onSubmit} />);

    // Submit with invalid email
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'not-an-email' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    // Wait for the error message to appear
    const errorMessage = await screen.findByText('Enter a valid email');
    expect(errorMessage).toBeInTheDocument();

    // Check that onSubmit was NOT called
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
