import React from 'react';
import Homepage from './';
import Page404 from './common/404';
import LoginForm from './LoginForm'
import {Switch, Route, Redirect, Link} from 'react-router-dom';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="homepage" exact path='/' component={Homepage} />
            <Route name='login' component={LoginForm} />
            <Route component={Page404} />
        </Switch>
    </div>
)

export default Routes;
