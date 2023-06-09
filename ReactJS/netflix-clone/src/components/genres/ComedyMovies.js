import React, { useEffect, useState } from 'react'
import get from 'axios'
import ".././style.css"

function ComedyMovies() {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'
  const [ comedyMovies, setComedyMovies ] = useState([])
  const [ id, setId ] = useState('')

  useEffect(() => {
    // Logic to import action movies from the TMDB API:
    get(`${tmdbUrl}${apiKey}&with_genres=35`)
      .then(response => {
        // console.log(response.data.results)
        setComedyMovies(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  })

  const handleClick = () => {
    console.log('Movie clicked')
  }

  return (
    <div className='mt-5'>
      <h4 className='text-light ms-3 mb-3'>Comedy Movies</h4>
      <div className='movies d-flex'>
        {comedyMovies.map(movie => (
          <div className='movie mx-3 mb-3' key={movie.id}>
            <img onClick={handleClick} src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            <div className='movie-info text-light mt-3'>
              <h5>{movie.title}</h5>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComedyMovies