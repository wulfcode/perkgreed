const Koa = require('koa');
const Router = require('koa-router');
const routes = require('./routes');
const json = require('koa-json');

const app = new Koa();
const router = new Router();
const PORT = 4001;
const API_VERSION = 'v1';

app.use(json());

router.use(`/${API_VERSION}`, routes.routes());
app.use(router.routes());

const server = app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server listening on port ${PORT}.`);
});

module.exports = server;
