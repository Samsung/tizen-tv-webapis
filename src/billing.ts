const { billing } = window.webapis;

export const {
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
