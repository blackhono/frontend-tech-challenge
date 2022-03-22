import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify'

import RegisterSchema from '../../assets/functions/validators/registerYup'
import { Loading } from '../../contexts/Loading'

export default function Register() {
  const { setLoading, isLoading } = useContext(Loading)

  useEffect(() => {
    // loading information, next step is loading false.
    setLoading(isLoading)
  }, [])

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={async (values) => {
        setLoading(isLoading)
        toast.info('promise in progress')
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve('resolved'), 500)
        })
        toast.success('promise is success')

        /* in test
        toast.promise(response, {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯',
        })
        */
        alert(JSON.stringify(values, null, 2))
        setLoading(!isLoading)
      }}
    >
      {({ errors, touched }) => (
        <Form className='col g-1 needs-validation was-validated' noValidate>
          <div className='col-md-4'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <Field
              name='name'
              type='text'
              className='form-control'
              required
              isValid={touched.name && !errors.name}
            />
            {errors.name ? (
              <div className='invalid-feedback'>{errors.name}</div>
            ) : null}
          </div>
          <div className='col-md-4'>
            <label htmlFor='email' className='form-label'>
              E-mail
            </label>
            <Field
              name='email'
              type='email'
              className='form-control'
              isValid={touched.email && !errors.email}
              required
            />
            {errors.email && touched.email ? (
              <div className='invalid-feedback'>{errors.email}</div>
            ) : null}
          </div>
          <div className='col-md-4'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <Field
              name='password'
              type='password'
              className='form-control'
              required
              isValid={touched.email && !errors.email}
            />
            {errors.password && touched.password ? (
              <div className='invalid-feedback'>{errors.password}</div>
            ) : null}
          </div>
          <br />
          <div className='col-12'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
