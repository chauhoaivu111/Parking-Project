import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Information from "../pages/Information"
import Views from "../pages/Views";
import Management from "../pages/Management";
import Report from "../pages/Report";
const Routes = () => {
  return (
    <Switch>
    
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/" exact component={Dashboard}/>
      <Route path="/Information" component={Information}/>
      <Route path="/Views" component={Views}/>
      <Route path="/Management" component={Management}/>
      <Route path="/Report" component={Report}/>
  
    </Switch>
  );
};

export default Routes;