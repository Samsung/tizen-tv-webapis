const { billing } = window.webapis;

const {
    getVersion,
    buyItem,
    getProductsList,
    applyInvoice,
    verifyInvoice,
    getServiceCountryAvailability,
    getUserPurchaseList,
    cancelSubscription,
    isServiceAvailable
} = billing;

module.exports = {
    getVersion,
    buyItem,
    getProductsList,
    applyInvoice,
    verifyInvoice,
    getServiceCountryAvailability,
    getUserPurchaseList,
    cancelSubscription,
    isServiceAvailable
};
