import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


const ValidatedLoginForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values,{ setSubmitting }) => {
                setTimeout(() => {
                    console.log('Logging in', values);
                 }, 500);
            }}
            // here we will define the validations
            validationSchema={Yup.object().shape({
                email:Yup.string().email().required('Required'),
                password:Yup.string().required('No password provided').min(8,'Password is too short - should be 8 characters long')
                            .matches(/(?=.*[0-9])/, 'Password should contain a number')
            })}

            >
            {
                props => {
                    const {values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting} = props;

                        return (
                            <form autoComplete='off' onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name='email' 
                                        value={values.email} className={"form-control " + (errors.email && touched.email?'form-control-danger':'')} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your email address'/>
                                        {
                                            errors.email && touched.email && (
                                                <span className='text-danger'>{errors.email}</span>
                                            )
                                        }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" name='password' 
                                        value={values.password} className={"form-control " + (errors.email && touched.email && 'danger')}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your password here'/>

                                    {
                                      errors.password && touched.password && (
                                                <span className='text-danger'>{errors.password}</span>
                                            )
                                        }
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Submit</button>
                            </form>
                        )
                }
            }
        </Formik>
    )
}
export default ValidatedLoginForm;