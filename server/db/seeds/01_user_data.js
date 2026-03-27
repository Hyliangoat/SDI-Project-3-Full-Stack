/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('users').del()

  //Using these to test my foreign key stuff
  const testPassOne = 'password123'
  const hash = await bcrypt.hash(testPassOne,10)
  const testPassTwo = 'password321'
  const hashTwo = await bcrypt.hash(testPassTwo, 10)

  await knex('users').insert([
    {id: 1, username: 'testaccount', password_hash: hash},
    {id: 2, username: 'throwaway', password_hash: hashTwo}
  ]);
};
