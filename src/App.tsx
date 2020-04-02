import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { userContext } from './state/user-context';

// eslint-disable-next-line no-unused-vars
import jwt, { Secret } from 'jsonwebtoken';

// eslint-disable-next-line no-unused-vars
import { UserType, AppState } from './utils/Types';

import AppHeader from './components/app-header/wrapped-app-header';
import NavMenu from './components/nav-menu/wrapped-nav-menu';

//Import WebComponents
import './components/home/lit-element/home';

type AppProps = Readonly<{}>;

class App extends React.Component<AppProps, AppState> {
    listeners: any;
    constructor(props: AppProps) {
        super(props);
        this.state = {
            user: null,
        };
    }

    setLoggedUserProfileDataInState() {
        try {
            const token = localStorage.getItem('token');
            let userLoggedIn: UserType | null = null;
            if (token) {
                userLoggedIn = jwt.verify(token, process.env.REACT_APP_JWT_SECRET as Secret) as UserType;
            }

            this.setState({ user: userLoggedIn });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            document.addEventListener('login-success', () => {
                this.setLoggedUserProfileDataInState();
                window.location.href = '/#/home';
            });

            document.addEventListener('login-failure', ((event: CustomEvent) => {
                // eslint-disable-next-line no-console
                console.error(event.detail);
            }) as EventListener);

            document.addEventListener('logout-success', () => {
                this.setState({ user: null });
                window.location.href = '/#/';
            });

            document.addEventListener('logout-failure', ((event: CustomEvent) => {
                // eslint-disable-next-line no-console
                console.error(event.detail);
            }) as EventListener);
        });
    }

    render() {
        return (
            <Router>
                <userContext.Provider value={this.state}>
                    <AppHeader />
                    <NavMenu />
                    <Switch>
                        <Route path="/home">
                            <home-content />
                        </Route>
                    </Switch>
                </userContext.Provider>
            </Router>
        );
    }
}

export default App;
