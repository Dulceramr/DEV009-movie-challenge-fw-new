import '../../styles/MovieList.css';

export const MovieList = () => {
  return (
    <div className='container'>
       <img
            className='imageContainer'
            alt='movie'
            />
            <div>
                 <h5 className='titleContainer'>Title Container</h5>
                 <p className='yearContainer'>Release Year</p>

            </div> 
    </div>
  )
}
