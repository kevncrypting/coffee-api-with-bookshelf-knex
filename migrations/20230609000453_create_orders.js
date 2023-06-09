/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("orders", function (table) {
        table.increments("id").primary();
        table.integer("beanId").unsigned().notNullable();
        table.integer("userId").unsigned().notNullable();
        table.timestamps(true, true);

        table.foreign("beanId").references("id").inTable("beans");
        table.foreign("userId").references("id").inTable("users");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("orders");
};
