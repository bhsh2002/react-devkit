
import React, { useState, useEffect } from 'react';
import { Form } from '../components/forms'; // Import the main Form component
import { 
    Box, 
    Typography, 
    Toolbar, 
    Paper, 
    CircularProgress, 
    Alert, 
    Button 
} from '@mui/material';

/**
 * @typedef {object} FormApi
 * @property {function(string): Promise<object>} [getOne] - Fetches a single resource. Required for edit mode.
 * @property {function(object): Promise<object>} create - Creates a new resource.
 * @property {function(string, object): Promise<object>} [update] - Updates a resource. Required for edit mode.
 */

/**
 * A page template for creating or editing a resource. It renders the form fields provided by `FormComponent`
 * and automatically handles data fetching, submission, and action buttons.
 * 
 * @param {object} props - The component props.
 * @param {string} props.resourceName - The singular name of the resource (e.g., "Product").
 * @param {string|number} [props.id] - The ID of the resource to edit. If absent, operates in "create" mode.
 * @param {FormApi} props.api - API object with methods for CRUD operations.
 * @param {React.ElementType} props.FormComponent - A component that renders the form fields (e.g., TextFields, Selects).
 * @param {function(object): void} [props.onSuccess] - Callback on successful submission.
 * @param {function(): void} [props.onCancel] - Callback for the cancel button. If not provided, the button is hidden.
 * @param {string} [props.submitText='Save'] - Text for the submit button.
 * @param {string} [props.cancelText='Cancel'] - Text for the cancel button.
 */
export const ResourceFormPage = ({
    resourceName,
    id,
    api,
    FormComponent,
    onSuccess = () => {},
    onCancel,
    submitText = 'Save',
    cancelText = 'Cancel',
}) => {
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isEditMode = id != null;

    useEffect(() => {
        if (isEditMode) {
            setLoading(true);
            setError(null);
            api.getOne(id)
                .then(response => setInitialData(response))
                .catch(err => setError(err))
                .finally(() => setLoading(false));
        }
    }, [api, id, isEditMode]);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const savedData = isEditMode
                ? await api.update(id, formData)
                : await api.create(formData);
            
            onSuccess(savedData.data);
        } catch (err) { 
            setError(err);
            setIsSubmitting(false);
        }
    };

    const pageTitle = isEditMode ? `Edit ${resourceName}` : `Create ${resourceName}`;

    if (loading) return <CircularProgress />;
    // Show a generic error if fetching failed, but not if a submission is in progress
    if (error && !isSubmitting) return <Alert severity="error">{error.message || 'Failed to load resource data.'}</Alert>;

    return (
        <Box>
            <Toolbar sx={{ p: '0 !important', mb: 2 }}>
                <Typography variant="h4" component="h1">{pageTitle}</Typography>
            </Toolbar>
            <Paper sx={{ p: 3 }}>
                {/* Render the form only when data is ready in edit mode, or always in create mode */}
                {(!isEditMode || initialData) && (
                    <Form onSubmit={handleSubmit} initialValues={initialData}>
                        {/* Render the fields using the provided component */}
                        <FormComponent />

                        {/* Display submission-specific error */}
                        {error && isSubmitting && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {error.message || 'An error occurred during submission.'}
                            </Alert>
                        )}

                        {/* Action Buttons */}
                        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <CircularProgress size={24} /> : submitText}
                            </Button>
                            {onCancel && (
                                <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
                                    {cancelText}
                                </Button>
                            )}
                        </Box>
                    </Form>
                )}
            </Paper>
        </Box>
    );
};
