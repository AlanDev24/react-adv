import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type={props.type || "text"}
        className="text-input"
        {...field}
        placeholder={props.placeholder || ""}
      />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
