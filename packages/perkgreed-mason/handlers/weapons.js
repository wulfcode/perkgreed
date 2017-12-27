const knex = require('../db/knex');

const weaponsHandler = {
  async getAll() {
    return knex('wwii_weapons').select();
  },
  async getByCodename(codename) {
    return knex('wwii_weapons').where('codename', codename).select();
  },
  async getById(id) {
    return knex('wwii_weapons').where('id', id).select();
  },
};

module.exports = weaponsHandler;
