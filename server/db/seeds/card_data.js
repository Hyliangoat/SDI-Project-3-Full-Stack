/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    {id: 1, name: 'Zhongwenman', location_of_origin: 'China', age: '56', workplace: 'Capital Hall', job_title: 'The god damned mayor', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zhongwenman.jpg/220px-Zhongwenman.jpg'},
    {id: 2, name: 'Sophie Blanchard', location_of_origin: 'France', age: '45', workplace: 'Paris', job_title: 'Aeronaut', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sophie_Blanchar.jpg/220px-Sophie_Blanchar.jpg'},
    {id: 3, name: 'Bessie Coleman', location_of_origin: 'United States', age: '34', workplace: 'United States', job_title: 'Aviator', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bessie_Coleman.jpg/220px-Bessie_Coleman.jpg'},
  ]);
};

/*
table.string('name', 50);
        table.string('location_of_origin', 100);
        table.string('age', 50);
        table.string('workplace', 100);
        table.string('job_title', 100);
        table.string('image_url', 255);

*/
