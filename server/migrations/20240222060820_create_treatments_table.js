/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('treatments', function (t) {
        t.bigint('patient_id').primary().unique();
        t.string('patient_name').notNullable().unique();
        t.date('date_of_treatment').notNullable();
        t.specificType('treatment_description', 'text[]').notNullable();
        t.specificType('medications_prescribed', 'text[]').notNullable();
        t.float('cost').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('treatments');
};