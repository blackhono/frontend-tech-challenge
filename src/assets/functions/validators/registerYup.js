import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
})

export default RegisterSchema
