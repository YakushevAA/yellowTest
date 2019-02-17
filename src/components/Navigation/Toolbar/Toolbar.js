import React from 'react';

import classes from './Toolbar.module.css';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
        </div>
        <nav className={classes.DesktopOnly}>
            Navigation
        </nav>
    </header>
);

export default toolbar;
