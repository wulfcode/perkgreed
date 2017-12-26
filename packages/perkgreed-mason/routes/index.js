const Router = require('koa-router');

const weaponsRoutes = require('./weapons');
const perksRoutes = require('./perks');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = {
    api_version: process.env.npm_package_version,
  };
});

router.use('/weapons', weaponsRoutes.routes());
router.use('/perks', perksRoutes.routes());

module.exports = router;
