import React from 'react'
import '../styles.css'

export default function ({searchVal}) {
    const handleInput = (e) => {
        searchVal(e.target.value)
    }
  return (
    <div className='searchBox'>
      <input onChange={handleInput} type="text" placeholder="Search Cards" />
    </div>
  )
}
