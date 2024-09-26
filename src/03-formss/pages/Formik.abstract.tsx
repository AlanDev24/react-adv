import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput, MyCheckbox, MySelect } from "../components";
import { Form, Formik } from "formik";


export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formic Abstaction</h1>

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
          terms: Yup.boolean().oneOf(
            [true],
            "Debe aceptar terminos y condiciones"
          ),
          jobType: Yup.string()
            .notOneOf(["it-senior"], "Esta opcion no esta disponible")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Escribe tu nombre"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Escribe tu apellido"
            />
            <MyTextInput
              label="E mail"
              name="email"
              placeholder="Escribe tu correo"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-junior">IT junior</option>
            </MySelect>

            <MyCheckbox label="Terms & conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
