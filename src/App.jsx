import { Route } from "react-router-dom";

import Welcome from "./view/welcome";
import Products from "./view/products";
import { MainHeader } from "./components";

export function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}
