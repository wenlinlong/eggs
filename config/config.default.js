/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613982759671_7561';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //连接数据库
  config.mongoose = {
    url: 'mongodb://localhost:27017/shop'
  }
  // 配置指定的前端地址
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*',  // 允许的请求来源（* 表示允许所有的IP的请求 ）
}


  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: ['*']
  };
  config.jwt = {
    secret: '123456',
  };

  return {
    ...config,
    ...userConfig,
  };
};
