import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import PublicLayout from './Layouts/PublicLayout/PublicLayout';
import AuthLayout from "./Layouts/AuthLayout/AuthLayout"


function App() {
  return (
    <Switch>
        {/* <PrivateRoute path="/internal/" component={InternalLayout} />*/}
        <Route path="/auth" component={AuthLayout} /> 
        <Route path="/public" component={PublicLayout} />
        <Redirect from="/" to="/public/home" />
    </Switch>
  );
}

export default App;
