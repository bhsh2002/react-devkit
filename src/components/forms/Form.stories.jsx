
import React from 'react';
import { Form } from './Form';
import { TextField } from './TextField';
import { FileUploadField } from './FileUploadField';
import { Button, Grid } from '@mui/material';
import * as yup from 'yup';

export default {
  title: 'Forms/Form Components',
  component: Form,
  subcomponents: { TextField, FileUploadField },
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

// --- Validation Schema ---
const validationSchema = yup.object({
  marketName: yup.string().required('Market name is required'),
  phoneNumber: yup.string().matches(/^[0-9-]+$/, 'Must be only digits and hyphens').nullable(),
  email: yup.string().email('Enter a valid email').required('Email is required'),
});


// --- Template ---
const FormTemplate = (args) => (
  <Form {...args}>
    <Grid container spacing={3} sx={{ maxWidth: 600 }}>
      <Grid size={{ xs: 12 }}>
        <TextField name="marketName" label="Market Name" fullWidth />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField name="phoneNumber" label="Phone Number" fullWidth />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField name="email" label="Contact Email" fullWidth />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <FileUploadField name="logo" label="Upload Logo" />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button type="submit" variant="contained">Submit</Button>
      </Grid>
    </Grid>
  </Form>
);

// --- Stories ---
export const Basic = {
    render: FormTemplate,
    args: {
        onSubmit: (values) => {
            alert('Form Submitted! Check the "Actions" tab in Storybook.');
            console.log('Form Values:', values);
        }
    },
    name: 'Basic Form'
};

export const WithInitialValues = {
    render: FormTemplate,
    args: {
        ...Basic.args,
        initialValues: {
            marketName: 'My Awesome Market',
            phoneNumber: '123-456-7890',
            email: 'contact@market.com',
        },
    },
    name: 'Form with Initial Values'
};

export const WithValidation = {
    render: FormTemplate,
    args: {
        ...Basic.args,
        validationSchema: validationSchema,
        initialValues: {
            email: 'not-an-email', // Start with an invalid value to show error
        }
    },
    name: 'Form with Validation'
};
