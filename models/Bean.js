const bookshelf = require("../bookshelf");

const Bean = bookshelf.model("Bean", {
    tableName: "beans",
    idAttribute: "id",
});

module.exports = Bean;
