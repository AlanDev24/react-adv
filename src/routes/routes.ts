import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//? lo que esta entre comentarios sirve para renombrar los chunks
const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1*/"../lazyload/pages/LazyPages"));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2*/"../lazyload/pages/LazyPages2"));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3*/"../lazyload/pages/LazyPages3"));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "Lazy-3",
  },
];
