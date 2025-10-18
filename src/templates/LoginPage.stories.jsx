
import React from 'react';
import { LoginPage } from './LoginPage';
import { Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default {
  title: 'Templates/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    logo: { control: { disable: true } },
    error: { control: { disable: true } },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const MockLogo = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <LockOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
        <Typography variant="h5" color="primary">DevKit</Typography>
    </Box>
);

export const Default = {
  args: {
    title: 'Sign in to your account',
    isSubmitting: false,
  },
};

export const WithLogo = {
  args: {
    ...Default.args,
    logo: <MockLogo />,
  },
};

export const Submitting = {
  args: {
    ...WithLogo.args,
    isSubmitting: true,
  },
};

export const WithError = {
  args: {
    ...WithLogo.args,
    error: new Error('Invalid username or password'),
  },
};
