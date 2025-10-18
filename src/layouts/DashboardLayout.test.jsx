
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { DashboardLayout } from './DashboardLayout';
import { People as PeopleIcon } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';

describe('DashboardLayout', () => {
  const mockNavItems = [
    { text: 'Users', icon: <PeopleIcon />, path: '/users' },
    { text: 'Settings', path: '/settings' },
  ];

  const mockDrawerHeader = <Typography>App Name</Typography>;
  const mockHeaderActions = <Button>Logout</Button>;
  const mockChildren = <div>Main Content</div>;

  test('renders all parts of the layout', () => {
    render(
      <DashboardLayout
        title="My Dashboard"
        navItems={mockNavItems}
        drawerHeader={mockDrawerHeader}
        headerActions={mockHeaderActions}
      >
        {mockChildren}
      </DashboardLayout>
    );

    // Check for title
    expect(screen.getByText('My Dashboard')).toBeInTheDocument();

    // Check for nav items
    expect(screen.getAllByText('Users')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Settings')[0]).toBeInTheDocument();

    // Check for drawer header
    expect(screen.getAllByText('App Name')[0]).toBeInTheDocument();

    // Check for header actions
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();

    // Check for main content
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });
});
