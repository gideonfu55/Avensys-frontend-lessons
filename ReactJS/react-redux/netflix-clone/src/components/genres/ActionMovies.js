import React, { useEffect, useState } from 'react'
import get from 'axios'

function ActionMovies() {

  const apiKey = 'a3f0d1b1d5874d21139169f1e0790276'
  const [ actionMovies, setActionMovies ] = useState([])

  useEffect(() => {
    // Logic to import action movies from the TMDB API:
    get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`)
      .then(response => {
        console.log(response.data.results)
        setActionMovies(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='mt-3'>
      <h4 className='text-light ms-3 mb-3'>Action Movies</h4>
      <div className='movies d-flex overflow-auto'>
        {actionMovies.map(movie => (
          <div className='movie mx-3 mb-3' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
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

export default ActionMovies

//  https://api.themoviedb.org/3/discover/movie?api_key=a3f0d1b1d5874d21139169f1e0790276&with_genres=28