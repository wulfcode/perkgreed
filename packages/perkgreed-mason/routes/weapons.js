const Router = require('koa-router');
const { weaponsHandler } = require('../handlers');

const router = new Router();

router.get('/', async ctx => {
  const weapons = await weaponsHandler.getAll()
    .then(result => result)
    .catch(() => null);
  ctx.body = {
    weapons,
  };
  ctx.status = !weapons ? 404 : 200;
});

router.get('/:codename', async ctx => {
  const weapon = await weaponsHandler.getByCodename(ctx.params.codename)
    .then(result => result[0])
    .catch(() => null);
  ctx.body = {
    weapon,
  };
  ctx.status = !weapon ? 404 : 200;
});

module.exports = router;
