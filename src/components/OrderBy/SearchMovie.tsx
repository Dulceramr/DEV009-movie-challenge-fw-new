import React from 'react'
import { useState } from 'react'

export const SearchMovie: React.FC = () => {
  const [busqueda, setBusqueda] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value)
  }
  return (
    <div className='container'>
        <form>
            <input
            type='text'
            placeholder='Search by Name'
            value={busqueda}
            onChange={handleInputChange}
            />
            <button type='submit' className='search-button'></button>
        </form>
    </div>
  )
}
