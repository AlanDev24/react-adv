import "../styles/styles.css";
import * as Yup from "yup";
import { useFormik } from "formik";

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,

    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(20, "Debe contener 20 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Debe ingresar un correo valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formic Yup tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstNmae">Firsst Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">E mail</label>
        <input type="email" {...getFieldProps("emai")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
