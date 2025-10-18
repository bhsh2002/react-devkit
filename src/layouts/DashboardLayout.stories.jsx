
import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { 
    Box, 
    Typography, 
    Paper, 
    Avatar, 
    IconButton, 
    Tooltip 
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    ShoppingCart as ShoppingCartIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';

export default {
  title: 'Layouts/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
  // We can set the layout to fullscreen to better visualize the component
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock Data and Components
const mockNavItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '#' },
  { text: 'Users', icon: <PeopleIcon />, path: '#' },
  { text: 'Products', icon: <ShoppingCartIcon />, path: '#' },
];

const mockDrawerHeader = (
    <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
        My App
    </Typography>
);

const mockHeaderActions = (
    <Box>
        <Tooltip title="User Profile">
            <IconButton>
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
            </IconButton>
        </Tooltip>
        <Tooltip title="Logout">
            <IconButton color="inherit" onClick={() => alert('Logout clicked!')}>
                <LogoutIcon />
            </IconButton>
        </Tooltip>
    </Box>
);

// Story
export const Default = {
  args: {
    navItems: mockNavItems,
    title: 'Dashboard',
    drawerHeader: mockDrawerHeader,
    headerActions: mockHeaderActions,
    children: (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Main Content Area
        </Typography>
        <Typography>
          This is where the main content of your page will be rendered. You can place your pages and components here.
        </Typography>
      </Paper>
    ),
  },
};
