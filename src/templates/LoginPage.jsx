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

/**
 * @typedef {object} LoginField
 * @property {string} name - @en The name of the login field (e.g., 'email' or 'username'). @ar اسم حقل تسجيل الدخول (مثل 'email' أو 'username').
 * @property {string} label - @en The label for the login field (e.g., 'Email Address' or 'Username'). @ar التسمية للحقل (مثل 'Email Address' أو 'Username').
 * @property {string} [autoComplete='email'] - @en The autocomplete value for the field. @ar قيمة الإكمال التلقائي للحقل.
 */

/**
 * @en A presentational template for a login page. It provides a standard UI for authentication and is composed of the library's form components.
 * @ar قالب عرض لصفحة تسجيل الدخول. يوفر واجهة مستخدم قياسية للمصادقة ويتكون من مكونات النماذج الخاصة بالمكتبة.
 *
 * @param {object} props - The component props.
 * @param {function(object): void} props.onSubmit - @en A callback function executed when the form is submitted. @ar دالة استدعاء يتم تنفيذها عند إرسال النموذج.
 * @param {boolean} [props.isSubmitting=false] - @en If true, shows a loading indicator on the submit button. @ar إذا كانت true، يتم عرض مؤشر تحميل على زر الإرسال.
 * @param {Error} [props.error] - @en If an error object is provided, an error message is displayed. @ar إذا تم توفير كائن خطأ، يتم عرض رسالة خطأ.
 * @param {React.ReactNode} [props.logo] - @en A React node to display as a logo. @ar مكون React لعرضه كشعار.
 * @param {string} [props.title='Sign in to your account'] - @en The main title displayed above the form. @ar العنوان الرئيسي الذي يُعرض فوق النموذج.
 * @param {LoginField} [props.loginField] - @en Configuration for the login identifier field. Defaults to a standard email field. @ar إعدادات حقل معرّف تسجيل الدخول. الافتراضي هو حقل بريد إلكتروني قياسي.
 */
export const LoginPage = ({
    onSubmit,
    isSubmitting = false,
    error,
    logo,
    title = 'Sign in to your account',
    loginField = { name: 'email', label: 'Email Address', autoComplete: 'email' },
}) => {

    // Dynamically create the validation schema based on the login field name
    const validationSchema = yup.object({
        [loginField.name]: yup.string()
            .required(`${loginField.label} is required`)
            .test(
                'is-email-if-required',
                'Enter a valid email',
                (value) => {
                    // Only apply email validation if the field name is 'email'
                    if (loginField.name === 'email') {
                        return yup.string().email().isValidSync(value);
                    }
                    return true; // Skip validation for other field names like 'username'
                }
            ),
        password: yup.string().required('Password is required'),
    });

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