
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Form } from './Form';
import { SwitchField } from './SwitchField';
import { Button } from '@mui/material';

describe('SwitchField', () => {
  test('renders correctly with label', () => {
    render(
      <Form onSubmit={() => {}}>
        <SwitchField name="testSwitch" label="Test Switch" />
      </Form>
    );
    expect(screen.getByLabelText('Test Switch')).toBeInTheDocument();
  });

  test('updates form state on change', async () => {
    const onSubmit = vi.fn();
    render(
      <Form initialValues={{ testSwitch: false }} onSubmit={onSubmit}>
        <SwitchField name="testSwitch" label="Test Switch" />
        <Button type="submit">Submit</Button>
      </Form>
    );

    const switchInput = screen.getByRole('switch');
    fireEvent.click(switchInput);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ testSwitch: true });
    });
  });

  test('is checked when initial value is true', () => {
    render(
      <Form initialValues={{ testSwitch: true }} onSubmit={() => {}}>
        <SwitchField name="testSwitch" label="Test Switch" />
      </Form>
    );

    const switchInput = screen.getByRole('switch');
    expect(switchInput.checked).toBe(true);
  });
});
