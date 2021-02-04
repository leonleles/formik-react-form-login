import React from "react";
import {Formik, Form, Field} from 'formik';

function validateUseName(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatePassWord(value) {
    let error;
    if (!value) {
        error = 'Required';
    }

    return error;
}

const ValidatedLoginForm = () => {

        return (
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                }}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({errors, touched, isValidating}) => (
                    <Form>
                        <Field name="username" validate={validateUseName}/>
                        {errors.username && touched.username && <div>{errors.username}</div>}

                        <Field name="password" validate={validatePassWord}/>
                        {errors.password && touched.password && <div>{errors.password}</div>}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        )
    }
;

export default ValidatedLoginForm;
