import React from 'react';
import HoCAux from '../../hoc/HoCAux';

function Layout(props) {
    return (
        <HoCAux>
            <header>
                Header
            </header>
            <main>
                {props.children}
            </main>
        </HoCAux>
    );
}

export default Layout;
