import React from 'react'

export default function Card({name, location, age, workplace, job, image }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Name: {location}</p>
      <p>Name: {age}</p>
      <p>Name: {workplace}</p>
      <p>Name: {job}</p>
      <p>Name: {image}</p>
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