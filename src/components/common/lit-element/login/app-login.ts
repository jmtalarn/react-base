import { LitElement, html, customElement, property } from 'lit-element';
import { isObjectEmpty } from '../../../../utils/object-utils';

// eslint-disable-next-line no-unused-vars
import jwt, { Secret } from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import { UserType } from '../../../../utils/Types';

import userData from '../../../../mock-data/user.json';
//Import WebComponents
import '../button/app-button';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-login': AppLoginAttributes;
        }

        interface AppLoginAttributes {
            user: any;
        }
    }
}

@customElement('app-login')
export class AppLogin extends LitElement {
    @property({
        type: Object,
    })
    user: UserType | null = null;

    loginSuccessEventKey: string = 'login-success';
    loginFailureEventKey: string = 'login-failure';

    logoutSuccessEventKey: string = 'logout-success';
    logoutFailureEventKey: string = 'logout-failure';

    handleClickGetAuth() {
        // const self = this;
        const token = jwt.sign(userData, process.env.REACT_APP_JWT_SECRET as Secret);

        localStorage.setItem('token', token);

        const loginSuccessEvent = new CustomEvent(this.loginSuccessEventKey, { composed: true, bubbles: true });
        this.dispatchEvent(loginSuccessEvent);
    }
    handleClickLogout() {
        localStorage.removeItem('token');
        const logoutSuccessEvent = new CustomEvent(this.logoutSuccessEventKey, {
            composed: true,
            bubbles: true,
        });

        this.dispatchEvent(logoutSuccessEvent);
    }
    attributeChangedCallback(name: any, oldVal: any, newVal: any) {
        super.attributeChangedCallback(name, oldVal, newVal);
        this.requestUpdate();
    }

    render() {
        const logoutButton = html`
            <app-button primary color="red" @click="${this.handleClickLogout}">Salir</app-button>
        `;
        const loginButton = html`
            <app-button primary color="blue" @click="${this.handleClickGetAuth}">Acceder</app-button>
        `;

        return html`
            <div>
                ${isObjectEmpty(this.user) ? loginButton : logoutButton}
            </div>
        `;
    }
}
