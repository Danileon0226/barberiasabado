import { Home } from "../Home/Home";
import Servicios from "../Home/Servicios/Servicios";
import { Menu } from "../Menu/Menu";

const routes = [
  { path: "/", component: Home },
  { path: "/Inicio", component: Home, exact: true },
  { path: "*", component: Home },
  { path: "/Servicios", component: Servicios },
];

export { routes };
