import type { AWS } from '@serverless/typescript';

import { hello } from './src/functions';

const configedEnv = require("dotenv").config()

const serverlessConfiguration: AWS = {
  service: 'serverless',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    },
    dotenv: {
      path: './.env',
      include: Object.keys(configedEnv.parsed),
    },
  },
  plugins: ['serverless-webpack', 'serverless-dotenv-plugin', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { hello }
}

module.exports = serverlessConfiguration;
