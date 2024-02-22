/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('treatments', function (t) {
        t.bigint('patient_id').primary();
        t.string('patient_name').notNullable();
        t.date('date_of_treatment').notNullable();
        t.specificType('treatment_description', 'text[]');
        t.specificType('medications_prescribed', 'text[]');
        t.float('cost');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('treatments');
};