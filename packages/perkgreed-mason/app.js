const koa = require('koa');
const Router = require('koa-router');
const routes = require('./routes');

const app = new koa();
const router = new Router();
const PORT = 4001;
const API_VERSION = 'v1';

router.use(`/${API_VERSION}`, routes.routes());
app.use(router.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

module.exports = server;
