import React from 'react'

export default function Header({setDetailPage}) {
  return (
    <div>
      <h1>Baseball Cards</h1>
        <button onClick={() => setDetailPage(false)}>Home</button>   
        <p>Profile placeholder</p>
        <p>Settings placeholder</p>
        <p>Logout placeholder</p>
    </div>
  )
}
