import React from 'react'

export default function Card({name, location, age, workplace, job, image, details, phone, email }) {
  return (
    <div>
      <img src={`http://localhost:8080/uploads/${image}`} alt={name} height="200px" width="200px" />
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Age: {age}</p>
      <p>Workplace: {workplace}</p>
      <p>Job: {job}</p>
      <p>Details: {details}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  )
}