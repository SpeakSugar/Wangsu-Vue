const proxyObj = {
  '/base-portal': {
    ws: false,
    target: process.env.VUE_APP_URL,
    changeOrigin: true
  }
};

module.exports = {
  devServer: {
    open: false,
    port: 8080,
    proxy: proxyObj
  }
};
