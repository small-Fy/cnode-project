module.exports = {
  devServer: {
    // 配置端口号
    port: 9527,
    // 用来真机调试
    host: '0.0.0.0',
    // 代理方式处理跨域 (面试必问)
    proxy: {
      "/api": {
        ws: false,
        // target就是请求接口的根路径
        target: "https://api-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
