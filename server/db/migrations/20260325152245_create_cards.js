//use docker compose exec server npx knex migrate:latest --knexfile ./db/knexfile.js to migrate and seed


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments();
        table.string('name', 50);
        table.string('location_of_origin', 100);
        table.string('age', 50);
        table.string('workplace', 100);
        table.string('job_title', 100);
        table.string('image_url', 255);
        table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cards');
};
