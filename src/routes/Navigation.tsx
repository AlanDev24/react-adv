import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPages, LazyPages2, LazyPages3 } from "../lazyload/pages";


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/lazy">Lazy</NavLink>
            </li>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/lazy2">Lazy2</NavLink>
            </li>
            <li>
              <NavLink className={ ( {isActive}) => isActive ? 'nav-active' : ''} to="/lazy3">Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/lazy" element={<LazyPages/>} />
            <Route path="/lazy2" element={<LazyPages2/>}/>
            <Route path="/lazy3" element={<LazyPages3/>}/>

            <Route path="/*" element={<Navigate to="/lazy" replace/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
};
