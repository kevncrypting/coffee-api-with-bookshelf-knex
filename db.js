const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development
const config = require("./knexfile")[environment]; // require environment's settings from knexfile
const knex = require("knex")(config); // connect Knex to the database via the config

module.exports = knex;
