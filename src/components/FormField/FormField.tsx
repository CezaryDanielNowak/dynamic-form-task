import React from 'react';
import './FormField.css';
import { IField } from "../../configuration/formScheme";
import {
    Field,
} from 'formik';

function requiredValidation(value: any) {
    return value ? '' : 'This field is required';
}

function FormField({ scheme, validationError } : { scheme: IField, validationError?: string }) {
    const { key, label, options, placeholder, required, type, width } = scheme;
    const validate = required
        ? requiredValidation
        : undefined;

    let resultField = null;
    switch (type) {
        case 'gender':
            resultField = (
                <div>
                    <label key={ `${key}-male` }>
                        <Field type="radio" name={ key } value="male" validate={ validate } />
                        male
                    </label>
                    <label key={ `${key}-female` }>
                        <Field type="radio" name={ key } value="female" validate={ validate } />
                        female
                    </label>
                    <label key={ `${key}-other` }>
                        <Field type="radio" name={ key } value="other" validate={ validate } />
                        other
                    </label>
                </div>
            );
            break;

        case 'boolean':
            resultField = (
                <label>
                  <Field
                    name={ key }
                    type="checkbox"
                    validate={ validate }
                    value="yes"
                /> Yes I agree
                </label>
            );
            break;

        case 'options':
            resultField = (
                <Field
                    component="select"
                    name={ key }
                    style={ { width } }
                    validate={ validate }
                >
                    { options && options.map((option: string) => (
                        <option key={ option } value={ option } label={ option } />
                    )) }
                </Field>
            );
            break;

        default:
            resultField = (
                <Field
                    id={ key }
                    name={ key }
                    placeholder={ placeholder }
                    style={ { width } }
                    type={ type }
                    validate={ validate }
                />
            )
    }

    return (
        <div className={ "FormField" }>
            <label htmlFor={ key } className="FormField__label">{ label }</label>
            { resultField }

            <div className="FormField__error">
                { validationError }
            </div>
        </div>
    );
}

export default React.memo(FormField);
