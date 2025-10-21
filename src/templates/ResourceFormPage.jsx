
import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Toolbar, Paper, CircularProgress, Alert } from '@mui/material';

/**
 * @typedef {object} FormApi
 * @property {function(string): Promise<object>} [getOne] - @en A function that fetches a single resource by its ID. Required for edit mode. @ar دالة تجلب موردًا واحدًا بواسطة معرفه. مطلوبة في وضع التعديل.
 * @property {function(object): Promise<object>} create - @en A function that creates a new resource. @ar دالة تنشئ موردًا جديدًا.
 * @property {function(string, object): Promise<object>} [update] - @en A function that updates an existing resource. Required for edit mode. @ar دالة تحدث موردًا موجودًا. مطلوبة في وضع التعديل.
 */

/**
 * @en A page template for creating or editing a resource. It handles fetching data for editing, submitting the form, and displaying loading/error states. It is a "smart" component that encapsulates the logic for resource form handling.
 * @ar قالب صفحة لإنشاء أو تعديل مورد. يتعامل مع جلب البيانات للتعديل، وتقديم النموذج، وعرض حالات التحميل والخطأ. إنه "مكون ذكي" يغلف منطق التعامل مع نماذج الموارد.
 *
 * @param {object} props - The component props.
 * @param {string} props.resourceName - @en The singular name of the resource, used for page titles (e.g., "Product", "User"). @ar الاسم المفرد للمورد، يُستخدم لعناوين الصفحات (مثل "منتج"، "مستخدم").
 * @param {string|number} [props.id] - @en The ID of the resource to edit. If not provided, the component operates in "create" mode. @ar معرف المورد المراد تعديله. إذا لم يتم توفيره، يعمل المكون في وضع "الإنشاء".
 * @param {FormApi} props.api - @en An API object with methods for `getOne`, `create`, and `update`. @ar كائن API يحتوي على دوال لـ `getOne` و `create` و `update`.
 * @param {React.ElementType} props.FormComponent - @en The form component to be rendered. It will receive `initialData`, `onSubmit`, `isSubmitting`, and `submitError` as props. @ar مكون النموذج المراد عرضه. سيستقبل `initialData` و `onSubmit` و `isSubmitting` و `submitError` كخصائص.
 * @param {function(object): void} [props.onSuccess] - @en A callback function executed after a successful create or update operation. It receives the saved data. @ar دالة استدعاء يتم تنفيذها بعد عملية إنشاء أو تحديث ناجحة. تستقبل البيانات المحفوظة.
 */
export const ResourceFormPage = ({
    resourceName,
    id,
    api,
    FormComponent,
    onSuccess = () => {},
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
                .then(response => {
                    setInitialData(response.data);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        console.log("Response from getOne API:", initialData);
    }, [api, id, isEditMode]);

    const handleSubmit = async (formData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            let savedData;
            if (isEditMode) {
                // Omit 'id' from the payload if it exists, as it's already in the URL/first param
                const { id: formId, ...updateData } = formData;
                savedData = await api.update(id, updateData);
            } else {
                savedData = await api.create(formData);
            }
            
            onSuccess(savedData.data);
        } catch (err) {
            setError(err);
            setIsSubmitting(false);
        }
        // No need to set isSubmitting to false on success because we will be navigating away
    };

    const pageTitle = isEditMode ? `Edit ${resourceName}` : `Create ${resourceName}`;

    if (loading) {
        return <CircularProgress />;
    }

    if (error && !initialData) {
        // Show error only if it happened while fetching initial data
        return <Alert severity="error">{error.message || 'Failed to load resource.'}</Alert>;
    }

    return (
        <Box>
            <Toolbar sx={{ p: '0 !important', mb: 2 }}>
                <Typography variant="h4" component="h1">{pageTitle}</Typography>
            </Toolbar>
            <Paper sx={{ p: 3 }}>
                {/* Render the form only when data is ready in edit mode, or always in create mode */}
                    <FormComponent
                        initialData={initialData}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        submitError={isSubmitting ? error : null} // Pass submit-specific error to the form
                    />
            </Paper>
        </Box>
    );
};
