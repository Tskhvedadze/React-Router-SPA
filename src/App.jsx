import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./view/welcome";
import Products from "./view/products";
import { MainHeader, ProductDetail } from "./components";

export function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productID">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
