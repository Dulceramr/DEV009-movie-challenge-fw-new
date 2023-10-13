import React from 'react'
import '../../styles/OrderByGenre.css';

export const OrderByGenre: React.FC = () => {
    const handleByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
    }
  return (
    <div className='container'>
    <label htmlFor='orderByGenre'>Order by Genre </label>
    <select id='orderByGenre' onChange={handleByChange}>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
    </select>
    </div>
  )
}
 