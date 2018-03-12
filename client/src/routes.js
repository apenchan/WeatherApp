import React from 'react';
import MainApp from './';
import Page404 from './common/404';
import LoginForm from './LoginForm'
import {Switch, Route, Redirect, Link} from 'react-router-dom';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={MainApp} />
            <Route path="*" component={Page404}/>
            <Route name="login" component={LoginForm} />
        </Switch>
    </div>
)

export default Routes;
