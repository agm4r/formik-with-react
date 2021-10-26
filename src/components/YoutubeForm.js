import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: 'Agmar Putra',
  email: '',
  channel: '',
  password: ''
}

const onSubmit = values => {
  console.table(values)
}

const AutoSubmitPassword = () => {
  const {values, submitForm} = useFormikContext()

  useEffect(() => {
    if (values.password === 'admin123') {
      submitForm()
    }
  }, [values, submitForm])

  return null

}


const validationSchema = Yup.object({
  name: Yup
    .string()
    .required(),
  email: Yup
    .string()
    .email()
    .required(),
  channel: Yup
    .string()
    .required(),
  password: Yup
    .string()
    .required()
})

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field 
            type="text" 
            id="name" 
            name="name" 
          />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field 
            type="email" 
            id="email" 
            name="email" 
          />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field 
           type="text" 
           id="channel" 
           name="channel" 
          />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <Field 
           type="password" 
           id="password" 
           name="password" 
          />
          <ErrorMessage name="password" />
        </div>
        <AutoSubmitPassword />
      </Form>
    </Formik>
  );
}
 
export default YoutubeForm;