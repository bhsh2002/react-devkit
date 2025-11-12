
import React, { useContext } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { FormContext } from './Form';

/**
 * @en A TextField component that automatically connects to a parent `<Form>` component. It displays validation errors and handles its state via FormContext.
 * @ar مكون TextField يتصل تلقائيًا بمكون `<Form>` أب. يعرض أخطاء التحقق من الصحة ويتعامل مع حالته عبر FormContext.
 *
 * @param {object} props - The component props, which are passed down to the MUI TextField.
 * @param {string} props.name - @en The name of the field. This is required to register the field with the parent Form. @ar اسم الحقل. هذا الحقل مطلوب لتسجيله في النموذج الأب.
 * @param {string} props.label - @en The label for the text field. @ar التسمية لحقل النص.
 */
export const TextField = ({ name, label, onChange: customOnChange, ...rest }) => {
    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error('TextField must be used within a Form component');
    }

    const { values, setFieldValue, errors } = formContext;

    const fieldError = errors[name];

    const handleChange = (event) => {
        setFieldValue(name, event.target.value);
        if (typeof customOnChange === 'function') {
            customOnChange(event, event.target.value);
        }
    };

    return (
        <MuiTextField
            name={name}
            label={label}
            value={values[name] || ''}
            onChange={handleChange}
            error={!!fieldError}
            helperText={fieldError || ''}
            {...rest}
        />
    );
};
