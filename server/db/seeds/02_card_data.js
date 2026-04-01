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
    {id: 4,
      name: 'John Nightreign',
      location_of_origin: 'United States', 
      age: '25', 
      workplace: 'United States', 
      job_title: 'Bounty Hunter', 
      image_url: '../uploads/notaperson4.jpg', 
      user_id: 1,
      description: 'John Nighreign is a bounty hunter that seeks the blood of the night lords to sate his desires.',
      phone_number: '515-2212',
      email: 'john.nightreign@fromsoft.com'
    },
    {id: 5,
      name: 'Billy Bobby',
      location_of_origin: 'United States', 
      age: '65', 
      workplace: 'Doesnt work', 
      job_title: 'Hillbilly', 
      image_url: '../uploads/notaperson5.jpg', 
      user_id: 1,
      description: 'Billy Bobby sits on his porch threatening locals. Great source of information.',
      phone_number: '125-8293',
      email: 'no email, hates 5G'
  },
    {id: 6,
      name: 'Jacob Abootman',
      location_of_origin: 'Canada', 
      age: '27', 
      workplace: 'Canadian Town Hall', 
      job_title: 'Mayor', 
      image_url: '../uploads/notaperson6.jpg', 
      user_id: 1,
      description: 'John Abootman is the mayor of Canada. They actually just have a mayor. Nothing else.',
      phone_number: '392-2718',
      email: 'Jacob.abootman@canada.eh'
  },
    {id: 7,
      name: 'Paul',
      location_of_origin: 'United States', 
      age: '30', 
      workplace: 'United States', 
      job_title: 'Cool Guy', 
      image_url: '../uploads/notaperson7.jpg', 
      user_id: 1,
      description: 'Paul is just great. Everyone loves him.',
      phone_number: '867-5309',
      email: 'paul@paul.paul'
  },
      {id: 8,
      name: 'Baul',
      location_of_origin: 'United States', 
      age: '30', 
      workplace: 'United States', 
      job_title: 'Not a cool Guy', 
      image_url: '../uploads/notaperson1.jpg', 
      user_id: 1,
      description: 'Pauls brother. We dont like him.',
      phone_number: '867-5309',
      email: 'baul@baul.baul'
  }
  ]);

  await knex.raw(
    "SELECT SETVAL('cards_id_seq', (SELECT MAX(id) FROM cards))"
  );
};


/*
docker run --name cards_db -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql postgres the code to run this

seriously who memorizes this
*/
