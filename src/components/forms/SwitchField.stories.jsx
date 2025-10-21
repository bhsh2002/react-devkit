
import React from 'react';
import { SwitchField } from './SwitchField';
import { Form } from './Form';
import { Button } from '@mui/material';

export default {
  title: 'Forms/SwitchField',
  component: SwitchField,
  decorators: [
    (Story, { args }) => (
      <Form 
        initialValues={{ isActive: args.checked || false }} 
        onSubmit={(data) => console.log(data)}
      >
        <Story />
        <br />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
      </Form>
    ),
  ],
};

export const Default = {
  args: {
    name: 'isActive',
    label: 'Is Active',
  },
};

export const CheckedByDefault = {
    args: {
      ...Default.args,
      checked: true, // This will be passed to the decorator's initialValues
    },
  };
