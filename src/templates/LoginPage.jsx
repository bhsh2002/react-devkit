
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

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

/**
 * @en A presentational template for a login page. It provides a standard UI for authentication and is composed of the library's form components.
 * @ar قالب عرض لصفحة تسجيل الدخول. يوفر واجهة مستخدم قياسية للمصادقة ويتكون من مكونات النماذج الخاصة بالمكتبة.
 *
 * @param {object} props - The component props.
 * @param {function({email: string, password: string}): void} props.onSubmit - @en A callback function executed when the form is submitted. @ar دالة استدعاء يتم تنفيذها عند إرسال النموذج.
 * @param {boolean} [props.isSubmitting=false] - @en If true, shows a loading indicator on the submit button. @ar إذا كانت true، يتم عرض مؤشر تحميل على زر الإرسال.
 * @param {Error} [props.error] - @en If an error object is provided, an error message is displayed. @ar إذا تم توفير كائن خطأ، يتم عرض رسالة خطأ.
 * @param {React.ReactNode} [props.logo] - @en A React node (e.g., an `<img>` or SVG) to display as a logo above the form. @ar مكون React (مثل `<img>` أو SVG) لعرضه كشعار فوق النموذج.
 * @param {string} [props.title='Sign in to your account'] - @en The main title displayed above the form. @ar العنوان الرئيسي الذي يُعرض فوق النموذج.
 */
export const LoginPage = ({
    onSubmit,
    isSubmitting = false,
    error,
    logo,
    title = 'Sign in to your account',
}) => {
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
                        validationSchema={validationSchema}
                        noValidate // Browser validation is disabled, yup handles it
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
                        </Button>
                    </Form>
                </Box>
            </Paper>
        </Container>
    );
};
