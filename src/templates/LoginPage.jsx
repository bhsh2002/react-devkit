import React from 'react';
import { Form, TextField } from '../components/forms';
import { 
    Container, 
    Paper, 
    Box, 
    Typography, 
    Button, 
    CircularProgress, 
    Alert 
} from '@mui/material';
import * as yup from 'yup';

// Default render function for action buttons
const defaultRenderActions = ({ isSubmitting }) => (
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isSubmitting}
    >
        {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
    </Button>
);

// Default validation schema generator
const getDefaultValidationSchema = (loginField, passwordField) => yup.object({
    [loginField.name]: yup.string()
        .required(`${loginField.label} is required`)
        .test(
            'is-email-if-required',
            'Enter a valid email',
            (value) => {
                if (loginField.name === 'email') {
                    return yup.string().email().isValidSync(value);
                }
                return true;
            }
        ),
    // Add password validation only if the field is present
    ...(passwordField && { 
        [passwordField.name]: yup.string().required(`${passwordField.label} is required`)
    }),
});

export const LoginPage = ({
    onSubmit,
    isSubmitting = false,
    error,
    logo,
    title = 'Sign in to your account',
    loginField = { name: 'email', label: 'Email Address', autoComplete: 'email' },
    passwordField = { name: 'password', label: 'Password', autoComplete: 'current-password' },
    validationSchema,
    renderActions = defaultRenderActions,
}) => {

    const finalValidationSchema = validationSchema || getDefaultValidationSchema(loginField, passwordField);

    return (
        <Container component="main" maxWidth="xs">
            <Paper 
                elevation={3}
                sx={{ 
                    marginTop: 8,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {logo && <Box mb={2}>{logo}</Box>}
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                        {error.message}
                    </Alert>
                )}
                <Box sx={{ mt: 1, width: '100%' }}>
                    <Form 
                        onSubmit={onSubmit} 
                        validationSchema={finalValidationSchema}
                        noValidate
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id={loginField.name}
                            label={loginField.label}
                            name={loginField.name}
                            autoComplete={loginField.autoComplete}
                            autoFocus
                        />
                        {passwordField && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id={passwordField.name}
                                label={passwordField.label}
                                name={passwordField.name}
                                type="password"
                                autoComplete={passwordField.autoComplete}
                            />
                        )}
                        
                        {renderActions({ isSubmitting })}

                    </Form>
                </Box>
            </Paper>
        </Container>
    );
};