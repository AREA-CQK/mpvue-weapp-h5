module.exports = {
  dev: {
    assetsPublicPath: '/',
    host: '0.0.0.0',
    port: 8080,
    proxyTable: {
      //开发跨域
      // '/liang': {
      //   target: 'http://47.96.167.211:5002',
      //   pathRewrite: {
      //     "^/liang": ''
      //   }
      // },
      // '/api': {
      //   target: 'http://www.liangplus.com',
      //   pathRewrite: {
      //     "^/api": ''
      //   }
      // }
    }
  },
  systemEnv: function () {
    const env = process.env.ENV;
    let systemConfig = {};
    if (env == 'dev') {
      console.log('systemEnv:dev');
      systemConfig = '';
    } else if (env == 'pro') {
      console.log('systemEnv:pro');
      systemConfig = '';
    } else {
      console.log('systemEnv:other');
      systemConfig = '';
    }
    console.log(systemConfig);
    for (let key in systemConfig) {
      systemConfig[key] = JSON.stringify(systemConfig[key])
    }
    console.log(systemConfig);
    return systemConfig;
  }
}
