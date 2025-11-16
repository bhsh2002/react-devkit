
import React, { useState, useEffect, useContext } from 'react';
import { Autocomplete as MuiAutocomplete, TextField, CircularProgress } from '@mui/material';
import { FormContext } from './Form';

/**
 * @en A form field for selecting a value from a list of options that are fetched from an API. It is a wrapper around Material-UI's Autocomplete component.
 * @ar حقل نموذج لاختيار قيمة من قائمة خيارات يتم جلبها من API. هو مغلّف لمكون Autocomplete من Material-UI.
 *
 * @param {object} props - The component props.
 * @param {string} props.name - @en The name of the field. @ar اسم الحقل.
 * @param {string} props.label - @en The label for the field. @ar التسمية للحقل.
 * @param {function(string): Promise<Array<object>>} props.fetchOptions - @en An async function that takes a search query and returns a promise that resolves to an array of options. @ar دالة غير متزامنة تأخذ استعلام بحث وتُرجع Promise يتم حله إلى مصفوفة من الخيارات.
 * @param {function(object): string} [props.getOptionLabel] - @en A function that returns the string label for a given option. Defaults to `option.label`. @ar دالة تُرجع التسمية النصية لخيار معين. الافتراضي هو `option.label`.
 * @param {boolean} [props.multiple=false] - @en If true, the user can select multiple options. @ar إذا كانت true، يمكن للمستخدم اختيار خيارات متعددة.
 */
export const AutocompleteField = ({ 
    name, 
    label, 
    fetchOptions, 
    getOptionLabel = (option) => option.label, 
    multiple = false,
    onChange: customOnChange,
    ...rest
}) => {
    const formContext = useContext(FormContext);
    if (!formContext) {
        throw new Error('AutocompleteField must be used within a Form component');
    }

    const { values, setFieldValue, errors } = formContext;

    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let active = true;
        setLoading(true);

        fetchOptions(inputValue)
            .then(fetchedOptions => {
                if (active) {
                    setOptions(fetchedOptions || []);
                }
            })
            .catch(() => {
                if (active) {
                    setOptions([]);
                }
            })
            .finally(() => {
                if (active) {
                    setLoading(false);
                }
            });

        return () => {
            active = false;
        };
    }, [inputValue, fetchOptions]);

    const handleChange = (event, newValue) => {
        setFieldValue(name, newValue);
        if (typeof customOnChange === 'function') {
            customOnChange(event, newValue);
        }
    };

    const fieldError = errors?.[name];

    return (
        <MuiAutocomplete
            multiple={multiple}
            options={options}
            loading={loading}
            getOptionLabel={getOptionLabel}
            value={values[name] || (multiple ? [] : null)}
            onChange={handleChange}
            onInputChange={(event, newInputValue, reason) => {
                if (reason === "input") {
                    setInputValue(newInputValue);
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={!!fieldError}
                    helperText={fieldError}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
            {...rest}
        />
    );
};
