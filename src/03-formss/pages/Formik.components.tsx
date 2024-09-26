import "../styles/styles.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formic Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe contener 20 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ingresar un correo valido")
            .required("Requerido"),
            terms: Yup.boolean()
                      .oneOf([true], 'Debe aceptar terminos y condiciones'),
            jobType: Yup.string()
                        .notOneOf(['it-senior'], 'Esta opcion no esta disponible')
                        .required('Requerido')
        })}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">Firsst Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">E mail</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-junior">IT junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />


            <label>
              <Field name="terms" type="checkbox" />
              Terms & conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
