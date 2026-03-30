/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    {id: 1, 
      name: 'Zhongwenman', 
      location_of_origin: 'China', 
      age: '56', 
      workplace: 'Capital Hall', 
      job_title: 'The god damned mayor', 
      image_url: '../uploads/notaperson3.jpg', 
      user_id: 1,
      description: 'Zhongwenman is the mayor of Capital Hall, a city in China. He is known for his strict policies and dedication to improving the city. Despite his tough exterior, he has a soft spot for his citizens and often goes out of his way to help those in need.',
      phone_number: '555-1234',
      email: 'zhongwenman@capitalhall.gov'
    },
    {id: 2, 
      name: 'Sophie Blanchard', 
      location_of_origin: 'France', 
      age: '45', 
      workplace: 'Paris', 
      job_title: 'Aeronaut', 
      image_url: '../uploads/notaperson2.jpg', 
      user_id: 1,
      description: 'Sophie Blanchard is a renowned aeronaut from France. She is known for her pioneering work in aviation and her dedication to advancing flight technology.',
      phone_number: '555-5678',
      email: 'sophie.blanchard@paris.aviation.fr'
    },
    {id: 3, 
      name: 'Bessie Coleman', 
      location_of_origin: 'United States', 
      age: '34', 
      workplace: 'United States', 
      job_title: 'Aviator', 
      image_url: '../uploads/notaperson1.jpg', 
      user_id: 2,
      description: 'Bessie Coleman was the first African American woman to earn a pilot certificate. She is known for her courage and determination in breaking barriers in aviation.',
      phone_number: '555-9012',
      email: 'bessie.coleman@unitedstates.aviation.us'
    },
  ]);

  await knex.raw(
    "SELECT SETVAL('cards_id_seq', (SELECT MAX(id) FROM cards))"
  );
};


/*
docker run --name cards_db -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql postgres the code to run this

seriously who memorizes this
*/
