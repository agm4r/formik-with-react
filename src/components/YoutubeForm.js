import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: 'Agmar Putra',
  email: '',
  channel: '',
}

const onSubmit = values => {
  console.table(values)
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
          <ErrorMessage className="error" name="name" />
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
 
export default YoutubeForm;