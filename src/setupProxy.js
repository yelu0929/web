/**
 * 新版react在package.json中的代理设置不再支持对象，官方推荐使用此插件。
 * 注：
 * 1. http-proxy-middleware最新版本要使用createProxyMiddleware方式创建。
 * 2. 文件名只能是setupProxy，否则无法请求。
 * 3. 如果通过node请求的是域名（比如: http://xxxxxx.com）而非ip地址，
 *    此时需要加上 changeOrigin: true  否则node无法请求。
 */

 // 开发环境
 const ipAddress = "http://192.168.2.125:19012/";
 
const { createProxyMiddleware } = require("http-proxy-middleware");
const env = "pre";

module.exports = function(app) {
  app.use(
    "/financeCenter",
    createProxyMiddleware({
      target: env === "pro" ? "https://moss.viphrm.com/" : env === "pre" ? "https://prefinancecenter.viphrm.com/" : ipAddress,
      changeOrigin: true
  }));
  app.use(
    "/makerServer",
    createProxyMiddleware({
      target: env === "pro" ? "https://moss.viphrm.com/" : env === "pre" ? "https://prefinancecenter.viphrm.com/" : "http://192.168.2.126:8070",
      changeOrigin: true
  }));
  app.use(
    "/permissionServer",
    createProxyMiddleware({
      target: env === "pro" ? "https://moss.viphrm.com/" : env === "pre" ? "http://premoss.viphrm.com/" : "http://192.168.2.118:8409",
      changeOrigin: true
  }));
  app.use(
    "/home-server",
    createProxyMiddleware({
      target: env === "pro" ? "https://moss.viphrm.com/" : env === "pre" ? "http://premoss.viphrm.com/" : "http://192.168.1.118:26005/",
      changeOrigin: true
  }));
  app.use(
    "/auth",
    createProxyMiddleware({
      target: env === "pro" ? "https://moss.viphrm.com/" : env === "pre" ? "http://premoss.viphrm.com/" : "http://192.168.2.118:8409",
      changeOrigin: true
  }));
}

