const { sso } = window.webapis;

const {
    getVersion,
    showAccountView,
    getGuid,
    getLoginUid,
    getLoginStatus,
    showCreateAccountView
} = sso;

module.exports = {
    getVersion,
    showAccountView,
    getGuid,
    getLoginUid,
    getLoginStatus,
    showCreateAccountView
};
