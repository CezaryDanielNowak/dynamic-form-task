import React from 'react';
import './DynamicForm.css';
import { IField } from "../../configuration/formScheme";
import FormField from "../FormField";
import {
   Form,
   Formik,
   FormikErrors,
} from 'formik';

function DynamicForm({ scheme } : { scheme : { formFields: IField[] } }) {
    return (
       <Formik
         initialValues={ {} }
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           actions.setSubmitting(false);
         }}
       >
            {({ errors, touched, validateForm, isValid, dirty }: { errors: FormikErrors<any>, touched: any, validateForm: Function, isValid: Boolean, dirty: Boolean }) => (
                 <Form>
                    { scheme.formFields.map(
                        (formFieldSchema) => {
                            const { key }: { key: string } = formFieldSchema;

                            return (
                                <FormField
                                    scheme={ formFieldSchema }
                                    key={ key }
                                    validationError={ errors[key] && touched[key] && errors[key] }
                                />
                            );
                        }
                    )}
                    <button type="submit" disabled={ !(isValid && dirty) }>Submit</button>
                 </Form>
            )}
       </Formik>
    );
}

export default React.memo(DynamicForm);
