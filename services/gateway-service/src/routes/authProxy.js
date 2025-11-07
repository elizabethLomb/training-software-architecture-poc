const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../../config');

const router = Router();
const authServiceUrl = config.services['service-auth'];

router.use(
  '/',
  createProxyMiddleware({
    target: authServiceUrl,
    changeOrigin: true,
    pathRewrite: { '^/auth': '/' },
  })
);

module.exports = router;