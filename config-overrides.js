const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'client/src/components',
        '@pages': 'client/src/pages',
        '@store': 'client/src/store',
        '@utils': 'client/src/utils'
    })(config);
    return config;
}