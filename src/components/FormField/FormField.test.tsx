import React from 'react';
import { render, screen } from '@testing-library/react';
import FormField from './FormField';
import { IField } from "../../configuration/formScheme";

test('renders learn react link', () => {
  const fieldData: IField = {
    key: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    type: 'string',
    width: '50%',
    required: true
  };

  render(<FormField scheme={ fieldData } />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
