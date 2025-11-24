import React, { useState, useEffect, useContext } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  FormHelperText,
  Box,
} from "@mui/material";
import { FormContext } from "./Form";

/**
 * @en A form field for selecting a value from a list of options fetched from an API using a regular Select component.
 * @ar حقل نموذج لاختيار قيمة من قائمة خيارات يتم جلبها من API باستخدام Select عادي.
 *
 * @param {object} props - The component props.
 * @param {string} props.name - The field name.
 * @param {string} props.label - The field label.
 * @param {function(string): Promise<Array<object>>} props.fetchOptions - Fetch function.
 * @param {function(object): string} [props.getOptionLabel] - Extract label from option.
 * @param {boolean} [props.multiple=false] - Multiple select.
 */
export const SelectField = ({
  name,
  label,
  noOptionsText = "No options",
  loadingText = "Loading…",
  fetchOptions,
  getOptionLabel = (option) => option.label,
  multiple = false,
  onChange: customOnChange,
  resetTrigger,
  required = false,
  ...rest
}) => {
  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error("SelectField must be used within a Form component");
  }

  const { values, setFieldValue, errors } = formContext;

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // جلب الخيارات مرة واحدة أو عند resetTrigger
  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchOptions("")
      .then((fetchedOptions) => {
        if (active) {
          setOptions(fetchedOptions || []);
        }
      })
      .catch(() => {
        if (active) setOptions([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [resetTrigger]);

  // إعادة تعيين القيمة عند resetTrigger
  useEffect(() => {
    setFieldValue(name, multiple ? [] : "");
  }, [resetTrigger]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setFieldValue(name, newValue);

    if (typeof customOnChange === "function") {
      customOnChange(event, newValue);
    }
  };

  const fieldError = errors?.[name];

  return (
    <FormControl fullWidth error={!!fieldError} required={required}>
      <InputLabel>{label}</InputLabel>

      <Select
        label={label}
        multiple={multiple}
        value={values[name] ?? (multiple ? [] : "")}
        onChange={handleChange}
        {...rest}
        endAdornment={
          loading ? (
            <CircularProgress size={18} style={{ marginRight: 10 }} />
          ) : null
        }
      >
        {loading && (
          <MenuItem disabled>{loadingText}</MenuItem>
        )}

        {!loading && options.length === 0 && (
          <MenuItem disabled>{noOptionsText}</MenuItem>
        )}

        {!loading &&
          options.map((option) => (
            <MenuItem key={option.value || option.id} value={option?.value || option}>
              {getOptionLabel(option)}
            </MenuItem>
          ))}
      </Select>

      {fieldError && <FormHelperText>{fieldError}</FormHelperText>}
    </FormControl>
  );
};
