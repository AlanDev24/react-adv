import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            {/* TODO: crear navLinks dinamicos */}
            <ul>
              {routes.map((route) => (
                <li key={route.name}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={route.to}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
