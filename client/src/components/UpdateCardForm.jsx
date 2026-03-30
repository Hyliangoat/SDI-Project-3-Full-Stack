import React from 'react'
import { updateCard } from '../services/Cardservice'
export default function UpdateCardForm({name, location, age, workplace, job, image, details, phone, email, id, setEditPage, updatePage}) {

    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const age = form.age.value;
        const location = form.location.value;
        const workplace = form.workplace.value;
        const job = form.job.value;
        const image = form.image.files[0];
        const details = form.details.value;
        const phone = form.phone.value;
        const email = form.email.value;

        await updateCard(id, {name, location, age, workplace, job, image, details, phone, email})
        await updatePage()
        setEditPage(false)
    }

  return (
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <input type="text" name="name" defaultValue={name} />
        <input type="text" name="location" defaultValue={location} />
        <input type="text" name="age" defaultValue={age} />
        <input type="text" name="workplace" defaultValue={workplace} />
        <input type="text" name="job" defaultValue={job} />
        <input type="file" name="image" />
        <textarea name="details" defaultValue={details}></textarea>
        <input type="text" name="phone" defaultValue={phone} />
        <input type="text" name="email" defaultValue={email} />
        <button type="submit">Update Card</button>
      </form>
    </div>
  )
}
