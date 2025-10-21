
import React from 'react';
import { AutocompleteField } from './AutocompleteField';
import { Form } from './Form';
import { Button } from '@mui/material';

export default {
  title: 'Forms/AutocompleteField',
  component: AutocompleteField,
  decorators: [
    (Story) => (
      <Form initialValues={{ country: null, cities: [] }} onSubmit={(data) => console.log(data)}>
        <Story />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
      </Form>
    ),
  ],
};

// Mock options
const countries = [
  { label: 'United States', code: 'US' },
  { label: 'United Kingdom', code: 'GB' },
  { label: 'Saudi Arabia', code: 'SA' },
];

// Mock API fetch function
const fetchCountries = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = countries.filter((country) =>
        country.label.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 500); // Simulate network delay
  });
};

export const Default = {
  args: {
    name: 'country',
    label: 'Country',
    fetchOptions: fetchCountries,
    getOptionLabel: (option) => option.label,
  },
};

export const Multiple = {
  args: {
    name: 'cities',
    label: 'Cities',
    fetchOptions: fetchCountries, // Reusing the same fetch function for simplicity
    getOptionLabel: (option) => option.label,
    multiple: true,
  },
};
