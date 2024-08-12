import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/home">Shopping</NavLink>
            </li>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/about" element={<h1>About page</h1>} />
            <Route path="/users" element={<h1>User page</h1>}/>
            <Route path="/home" element={<ShoppingPage/>}/>

            <Route path="/*" element={<Navigate to="/home" replace/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
};
