import React from 'react';
import { userContext } from '../../state/user-context';

// eslint-disable-next-line no-unused-vars
import { UserType } from '../../utils/Types';

//Import WebComponents
import './lit-element/app-header';
import '../common/lit-element/login/app-login';

type AppHeaderProps = Readonly<{}>;

const rightSideStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
};
const AppHeader: React.SFC<AppHeaderProps> = () => {
    return (
        <userContext.Consumer>
            {({ user }) => {
                const userName: string = (user as UserType)?.given_name || '';
                const greetings = userName ? `Hello ${userName}!` : '';

                return (
                    <app-header>
                        <h1 slot="title">React all-in-one starter</h1>
                        <div style={rightSideStyles} slot="right-side">
                            <p className="username">{greetings}</p>
                            <app-login user={JSON.stringify(user)} />
                        </div>
                    </app-header>
                );
            }}
        </userContext.Consumer>
    );
};

export default AppHeader;
