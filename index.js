const webapis = require('./wrapper/webapis');
const adinfo = require('./wrapper/adinfo');
const appcommon = require('./wrapper/appcommon');
const avinfo = require('./wrapper/avinfo');
const avplay = require('./wrapper/avplay');
const avplaystore = require('./wrapper/avplaystore');
const billing = require('./wrapper/billing');
const network = require('./wrapper/network');
const productinfo = require('./wrapper/productinfo');
const sso = require('./wrapper/sso');
const tvinfo = require('./wrapper/tvinfo');
const widgetdata = require('./wrapper/widgetdata');
const WebAPIException = require('./wrapper/webapiexception');

module.exports = {
    webapis,
    adinfo,
    appcommon,
    avinfo,
    avplay,
    avplaystore,
    billing,
    network,
    productinfo,
    sso,
    tvinfo,
    widgetdata,
    WebAPIException
};
