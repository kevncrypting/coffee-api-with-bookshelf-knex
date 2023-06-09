const bookshelf = require("../bookshelf");
const Bean = require("./Bean");
const User = require("./User");

const Order = bookshelf.model("Order", {
    tableName: "orders",
    idAttribute: "id",
    bean() {
        return this.hasOne(Bean, "beanId");
    },
    user() {
        return this.hasMany(User, "userId");
    },
});

module.exports = Order;
