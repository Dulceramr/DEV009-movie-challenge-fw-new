import React from 'react'
import '../../styles/OrderByVotes.css';

export const OrderByVotes: React.FC = () => {
    const handleByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
    }
  return (
    <div className='container'>
    <label htmlFor='OrderByVotes'>Votes </label>
    <select id='OrderByVotes' onChange={handleByChange}>
        <option value="5">5 ⭐️⭐️⭐️⭐️⭐️</option>
        <option value="4">4 ⭐️⭐️⭐️⭐️</option>
        <option value="3">3 ⭐️⭐️⭐️</option>
        <option value="2">2 ⭐️⭐️</option>
        <option value="1">1 ⭐️</option>
    </select>
    </div>
  )
}
