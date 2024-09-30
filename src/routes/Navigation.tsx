import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { RegisterPage } from "../03-formss/pages/RegisterPage";
import { FormicBasicPage } from "../03-formss/pages/FormicBasicPage";
import { FormikYupPage } from "../03-formss/pages/Formik.yup.pagec";
import { FormikComponentsPage } from "../03-formss/pages/Formik.components";
import { FormikAbstractPage } from "../03-formss/pages/Formik.abstract";
import { RegisterFormikPage } from "../03-formss/pages/RegisterFormikPage";
import { DinamicForm } from "../03-formss/pages/DinamicForm";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/register"
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-basic"
              >
                Formic Basoc
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-yup"
              >
                Formik yup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-components"
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-abstract"
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-registerPage"
              >
                Formik Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/dinamic-form"
              >
                Dinamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormicBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route path="/formik-abstract" element={<FormikAbstractPage />} />
          <Route path="/formik-registerPage" element={<RegisterFormikPage />} />
          <Route path="/dinamic-form" element={<DinamicForm />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
