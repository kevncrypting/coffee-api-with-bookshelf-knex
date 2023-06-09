const bookshelf = require("../bookshelf");
const Order = require("./Order");

const User = bookshelf.model("User", {
    tableName: "users",
    idAttribute: "id",
    orders() {
        return this.belongsToMany(Order, "orderId");
    },
});

module.exports = User;
