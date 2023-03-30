import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
  <Switch>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
  </BrowserRouter>
  );
};

export default App;