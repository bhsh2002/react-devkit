import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  test('renders with email field by default', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  test('calls onSubmit with email and password by default', async () => {
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

  test('renders with a custom username field when specified', () => {
    const usernameField = { name: 'username', label: 'Username' };
    render(<LoginPage loginField={usernameField} />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument();
  });

  test('calls onSubmit with custom username and password', async () => {
    const onSubmit = vi.fn();
    const usernameField = { name: 'username', label: 'Username' };
    render(<LoginPage onSubmit={onSubmit} loginField={usernameField} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({ 
          username: 'testuser', 
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
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('shows email validation error by default', async () => {
    const onSubmit = vi.fn();
    render(<LoginPage onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    const errorMessage = await screen.findByText('Enter a valid email');
    expect(errorMessage).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('does not show email validation for username field', async () => {
    const onSubmit = vi.fn();
    const usernameField = { name: 'username', label: 'Username' };
    render(<LoginPage onSubmit={onSubmit} loginField={usernameField} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled();
    });
    expect(screen.queryByText('Enter a valid email')).not.toBeInTheDocument();
  });
});