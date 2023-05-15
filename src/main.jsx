import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes/router-config";
import { Menu } from "./Menu/Menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <section className="content">
        <Menu></Menu>
        <Routes>
          {routes.map((ruta) => (
            <Route
              key={ruta.path}
              path={ruta.path}
              element={<ruta.component />}
            />
          ))}
        </Routes>
      </section>
    </BrowserRouter>
  </>
);
