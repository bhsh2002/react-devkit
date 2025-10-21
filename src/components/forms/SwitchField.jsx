
import React, { useContext } from 'react';
import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { FormContext } from './Form';

/**
 * @en A Switch component that automatically connects to a parent `<Form>` component. It is designed to be used for boolean values.
 * @ar مكون Switch يتصل تلقائيًا بمكون `<Form>` أب. مصمم للاستخدام مع القيم المنطقية (boolean).
 *
 * @param {object} props - The component props.
 * @param {string} props.name - @en The name of the field. This is required to register the field with the parent Form. @ar اسم الحقل. هذا الحقل مطلوب لتسجيله في النموذج الأب.
 * @param {string} props.label - @en The label to display next to the switch. @ar التسمية التي ستُعرض بجانب المفتاح.
 */
export const SwitchField = ({ name, label, ...rest }) => {
    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error('SwitchField must be used within a Form component');
    }

    const { values, setFieldValue } = formContext;

    const handleChange = (event) => {
        setFieldValue(name, event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <MuiSwitch
                    checked={!!values[name]} // Ensure value is a boolean
                    onChange={handleChange}
                    name={name}
                    {...rest}
                />
            }
            label={label}
        />
    );
};
