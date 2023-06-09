const knex = require("./db"); // importing the existing Knex config
const Bookshelf = require("bookshelf"); // importing the Bookshelf ORM library
const bookshelf = Bookshelf(knex); // initializing this app's Bookshelf instance with our Knex configuration

// exporting our specific configuration with Bookshelf so it connects to the database
module.exports = bookshelf;
