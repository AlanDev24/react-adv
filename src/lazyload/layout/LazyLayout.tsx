import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPages, LazyPages2, LazyPages3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout page</h1>
      {/* Rutas hijas */}
      <ul>
        <li>
          <NavLink to="lazy">Lazy </NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy" element={<LazyPages/>}/>
        <Route path="lazy2" element={<LazyPages2/>}/>
        <Route path="lazy3" element={<LazyPages3/>}/>

        {/* <Route path="*" element={<div>Not found</div>}/> */}
        <Route path="*" element={<Navigate replace to=" lazy1"/>}/>
      </Routes>
    </div>
  );
};

export default LazyLayout;
