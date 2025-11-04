import React, { useState, useEffect } from 'react';
import { Form } from '../components/forms';
import { 
    Box, 
    Typography, 
    Toolbar, 
    Paper, 
    CircularProgress, 
    Alert, 
    Button 
} from '@mui/material';

// Default render function for action buttons
const defaultRenderActions = ({ isSubmitting, onCancel }) => (
    <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button 
            type="submit" 
            variant="contained" 
            disabled={isSubmitting}
        >
            {isSubmitting ? <CircularProgress size={24} /> : 'Save'}
        </Button>
        {onCancel && (
            <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
                Cancel
            </Button>
        )}
    </Box>
);

/**
 * A fully dynamic page template for creating or editing a resource.
 * 
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the component.
 * @param {string|number} [props.id] - The ID of the resource to edit.
 * @param {object} props.api - API object with `getOne`, `create`, and `update` methods.
 * @param {React.ElementType} props.FormComponent - A component that renders the form fields.
 * @param {function(object): void} [props.onSuccess] - Callback on successful submission.
 * @param {function(): void} [props.onCancel] - Callback for the cancel button, passed to `renderActions`.
 * @param {function(object): object} [props.responseAdapter] - Adapts the data from `api.getOne`.
 * @param {function(object): object} [props.requestAdapter] - Adapts the form data before sending to `api.create` or `api.update`.
 * @param {function({isSubmitting: boolean, onCancel: function}): React.ReactNode} [props.renderActions] - Function to render action buttons.
 */
export const ResourceFormPage = ({
    title,
    id,
    api,
    FormComponent,
    onSuccess = () => {},
    onCancel,
    responseAdapter = (data) => data,
    requestAdapter = (data) => data,
    renderActions = defaultRenderActions,
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
                .then(response => setInitialData(responseAdapter(response)))
                .catch(err => setError(err))
                .finally(() => setLoading(false));
        }
    }, [api, id, isEditMode, responseAdapter]);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);
        const adaptedData = requestAdapter(formData);
        try {
            const savedData = isEditMode
                ? await api.update(id, adaptedData)
                : await api.create(adaptedData);
            
            onSuccess(savedData.data);
        } catch (err) { 
            setError(err);
            setIsSubmitting(false);
        }
    };

    if (loading) return <CircularProgress />;
    if (error && !isSubmitting) return <Alert severity="error">{error.message || 'Failed to load resource data.'}</Alert>;

    return (
        <Box>
            <Toolbar sx={{ p: '0 !important', mb: 2 }}>
                <Typography variant="h4" component="h1">{title}</Typography>
            </Toolbar>
            <Paper sx={{ p: 3 }}>
                {(!isEditMode || initialData) && (
                    <Form onSubmit={handleSubmit} initialValues={initialData}>
                        <FormComponent />

                        {error && isSubmitting && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {error.message || 'An error occurred during submission.'}
                            </Alert>
                        )}

                        {/* Render action buttons dynamically */}
                        {renderActions({ isSubmitting, onCancel })}
                    </Form>
                )}
            </Paper>
        </Box>
    );
};