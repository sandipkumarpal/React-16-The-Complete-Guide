import React from 'react';
import HoCAux from '../../hoc/HoCAux';

import '../../stylesheets/components/Layout/layout.css';
import ToolBar from '../ToolBar';

function Layout(props) {
    return (
        <HoCAux>
            <ToolBar />
            <main className="content">
                {props.children}
            </main>
        </HoCAux>
    );
}

export default Layout;
