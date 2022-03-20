import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'

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
        await new Promise((resolve) => {
          setTimeout(resolve, 500)
        })
        alert(JSON.stringify(values, null, 2))
        setLoading(!isLoading)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='mb-3'>
            <Field name='name' type='text' className='form-control' />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>
          <div className='mb-3'>
            <Field name='email' type='email' className='form-control' />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <div className='mb-3'>
            <Field name='password' type='password' className='form-control' />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}
