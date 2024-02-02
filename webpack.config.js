const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')
const productionConfig = require('./webpack.production.config.js')
const developmentConfig = require('./webpack.development.config.js')

module.exports = (env, args) => {
	console.log(args)
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}