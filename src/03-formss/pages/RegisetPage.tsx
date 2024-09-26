import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisetPage = () => {
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo en necesario</span>}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Este campo en necesario</span>}

        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          name="password1"
          className="has-error"
        />
        {password1.trim().length <= 0 && <span>Este campo en necesario</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          name="password2"
          className="has-error"
        />
        {password2.trim().length <= 0 && <span>Este campo en necesario</span>}

        <button type="submit">Create</button>
        <button onClick={resetForm} type="button">
          Reset Form
        </button>
      </form>
    </div>
  );
};
