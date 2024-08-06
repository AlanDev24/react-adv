import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//? lo que esta entre comentarios sirve para renombrar los chunks
const lazylayout = lazy(() => import(/* webpackChunkName: "LazyPage1*/"../lazyload/layout/LazyLayout"));


export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: lazylayout,
    name: "Lazy layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
