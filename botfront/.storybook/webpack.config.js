const resolve = require('path').resolve;

module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
    });

    // allows loading icon fonts imported in main.less
    config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: resolve(__dirname, '../'),
    });
    
    // Return the altered config
    return config;
};
