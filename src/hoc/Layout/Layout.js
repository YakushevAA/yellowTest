import React, { Component } from 'react';

import Wrapper from '../wrapper/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Wrapper>
                <Toolbar />
                <main>
                   Content
                </main>
            </Wrapper>
        )
    }
}

export default Layout;
