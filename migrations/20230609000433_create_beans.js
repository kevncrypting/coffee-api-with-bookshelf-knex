/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("beans", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("region").notNullable();
        table.string("roastLevel").notNullable();
        table.float("price").notNullable();
        table.string("description").notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("beans");
};
