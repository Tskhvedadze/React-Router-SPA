import { Route } from "react-router-dom";

import Welcome from "./view/welcome";
import Products from "./view/products";

export function App() {
  return (
    <>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </>
  );
}
