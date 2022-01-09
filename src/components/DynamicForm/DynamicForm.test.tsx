import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicForm from './DynamicForm';
import { IField } from "../../configuration/formScheme";

test('renders learn react link', () => {
  const testScheme: { formFields: IField[] } = {
    formFields: [],
  }
  render(<DynamicForm scheme={ testScheme } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
