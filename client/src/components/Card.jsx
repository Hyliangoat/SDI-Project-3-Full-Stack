import React from 'react'
import { deleteCard } from '../services/Cardservice'

export default function Card({id, name, location, age, workplace, job, image }) {

  return (
    <div>
      <img src={`http://localhost:8080/uploads/${image}`} alt={name} height="50px" width="50px" />
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Age: {age}</p>
      <p>Workplace: {workplace}</p>
      <p>Job: {job}</p>
    </div>
  )
}


/*
        table.increments();
        table.string('name', 50);
        table.string('location_of_origin', 100);
        table.string('age', 50);
        table.string('workplace', 100);
        table.string('job_title', 100);
        table.string('image_url', 255);
*/