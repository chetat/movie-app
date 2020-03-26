import React, {Component} from 'react';
import {Route,  Redirect, Switch} from 'react-router-dom';
import List from './containers/List';
import MovieDetail from './containers/MovieDetail';


export default class Routes extends Component{

    render(){
        return(
            <Switch>
                <Redirect
                        exact
                        from="/"
                        to="/home"
                    />
                <Route exact path="/home" component={List} />
                <Route exact path="/details/:movieId" component={MovieDetail} />
            </Switch>
        );
    }
}