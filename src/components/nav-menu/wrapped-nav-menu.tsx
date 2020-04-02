import React from 'react';
import { userContext } from '../../state/user-context';

//Import WebComponents
import './lit-element/nav-menu';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'nav-menu': NavMenuAttributes;
        }

        interface NavMenuAttributes {
            user: any;
        }
    }
}

type NavMenuProps = Readonly<{}>;

const NavMenu: React.SFC<NavMenuProps> = () => (
    <userContext.Consumer>
        {({ user }) => {
            return <nav-menu user={JSON.stringify(user)} />;
        }}
    </userContext.Consumer>
);
export default NavMenu;
