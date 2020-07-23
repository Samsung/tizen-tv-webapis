const glob = require('glob');

module.exports = {
    entry: {
        index: glob.sync('./src/index.ts'),
        adinfo: glob.sync('./src/adinfo.ts'),
        appcommon: glob.sync('./src/appcommon.ts'),
        avinfo: glob.sync('./src/avinfo.ts'),
        avplay: glob.sync('./src/avplay.ts'),
        avplaystore: glob.sync('./src/avplaystore.ts'),
        billing: glob.sync('./src/billing.ts'),
        network: glob.sync('./src/network.ts'),
        productinfo: glob.sync('./src/productinfo.ts'),
        sso: glob.sync('./src/sso.ts'),
        tvinfo: glob.sync('./src/tvinfo.ts'),
        webapiexception: glob.sync('./src/webapiexception.ts'),
        widgetdata: glob.sync('./src/widgetdata.ts')
    },
    target: 'node',
    devtool: false,
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: '[name].js',
        path: __dirname,
        libraryTarget: 'this'
    }
};
