import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  const {
    onChange,
    formData,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required().min(2).max(15),
          email: Yup.string().required().email(),
          password1: Yup.string().required().min(6),
          password2: Yup.string()
            .required()
            .oneOf([Yup.ref("password1")], 'Las contraseñas deben de ser iguales'),
        })}
      >
        {({handleReset}) => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="name"
              placeholder="Escribe tu nombre"
            />
            <MyTextInput
              label="E mail"
              name="email"
              placeholder="Escribe tu correo"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="Escribe tu contraseña"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              type="password"
              placeholder="Repite tu contraseña"
            />

            <button type="submit">Submit</button>
            <button type="submit" onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
