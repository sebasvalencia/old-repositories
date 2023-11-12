import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import App from '../App'


const Router = () =>(

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} ></Route>
            <Route path='/dashboard/:githubUser' component={Dashboard} ></Route>
            <Route component={NotFound} ></Route>
        </Switch>
    </BrowserRouter>

);

export default Router;

