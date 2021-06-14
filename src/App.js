import { Redirect, Route, Switch } from "react-router-dom";
import PublicLayout from './Layouts/PublicLayout/PublicLayout';
import AuthLayout from "./Layouts/AuthLayout/AuthLayout"
import InternalLayout from './Layouts/InternalLayout/InternalLayout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Switch>
        <PrivateRoute path="/internal" component={InternalLayout} />
        <Route path="/auth" component={AuthLayout} /> 
        <Route path="/public" component={PublicLayout} />
        <Redirect from="/" to="/public/home" />
    </Switch>
  );
}

export default App;
