import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
    render () {
        return (
            <Wrapper>
                <Toolbar />
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );
