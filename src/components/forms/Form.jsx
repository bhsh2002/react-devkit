
import React, { createContext, useState, useCallback } from 'react';

/**
 * @en Context for the Form component. Provides `values`, `setFieldValue`, and `errors` to child input components.
 * @ar سياق مكون Form. يوفر `values` و `setFieldValue` و `errors` لمكونات الإدخال الفرعية.
 * @type {React.Context<{values: object, setFieldValue: function(string, any): void, errors: object}>}
 */
export const FormContext = createContext(null);

/**
 * @en A Form component that provides state management and validation for its children input fields.
 * @ar مكون Form يوفر إدارة الحالة والتحقق من الصحة لحقول الإدخال الفرعية.
 *
 * @param {object} props - The component props.
 * @param {object} [props.initialValues={}] - @en The initial values for the form fields. @ar القيم الأولية لحقول النموذج.
 * @param {function(object): void} props.onSubmit - @en A callback function executed when the form is submitted successfully after validation. @ar دالة استدعاء يتم تنفيذها عند إرسال النموذج بنجاح بعد التحقق من الصحة.
 * @param {import('yup').ObjectSchema} [props.validationSchema] - @en A Yup validation schema to validate the form values. @ar مخطط تحقق من Yup للتحقق من قيم النموذج.
 * @param {React.ReactNode} props.children - @en The child elements of the form. @ar العناصر الفرعية للنموذج.
 */
export const Form = ({ initialValues = {}, onSubmit, validationSchema, children, ...rest }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const setFieldValue = useCallback((name, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
        // Clear error for the field when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: undefined,
            }));
        }
    }, [errors]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});

        try {
            if (validationSchema) {
                // Validate the form values
                await validationSchema.validate(values, { abortEarly: false });
            }
            // If validation is successful, call onSubmit
            if (onSubmit) {
                onSubmit(values);
            }
        } catch (err) {
            // If validation fails, format and set errors
            if (err.inner) {
                const formattedErrors = err.inner.reduce((acc, validationError) => {
                    acc[validationError.path] = validationError.message;
                    return acc;
                }, {});
                setErrors(formattedErrors);
            }
        }
    };

    const contextValue = {
        values,
        setFieldValue,
        errors,
    };

    return (
        <FormContext.Provider value={contextValue}>
            <form onSubmit={handleSubmit} {...rest}>
                {children}
            </form>
        </FormContext.Provider>
    );
};
