import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import FitHistory from './modules/FitHistory/FitHistory';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAuth = asyncComponent(() => {
    return import('./modules/Auth/Auth');
});

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Redirect to="/auth" />
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
                <Switch>
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/" exact component={FitHistory} />
                    <Redirect to="/" />
                </Switch>
            );
          }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
};
  
export default withRouter( connect( mapStateToProps )( App ) );
