import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../Wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Wrapper>
                <Toolbar />
                <main>
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
