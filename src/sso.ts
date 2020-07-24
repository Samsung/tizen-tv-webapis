const { sso } = window.webapis;

export const {
    getVersion,
    showAccountView,
    getGuid,
    getLoginUid,
    getLoginStatus,
    showCreateAccountView
} = sso;

export enum SsoLoginState {
    /**
     * Not logged in
     */
    SSO_NOT_LOGIN = 0,
    /**
     * Logged in
     */
    SSO_LOGIN = 1
}
