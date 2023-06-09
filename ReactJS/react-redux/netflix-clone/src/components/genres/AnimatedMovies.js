import React, { useEffect, useState } from 'react'
import get from 'axios'
// import YouTube from 'react-youtube'
import ".././style.css"

function AnimatedMovies() {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'
  const [ comedyMovies, setComedyMovies ] = useState([])
  const [ id, setId ] = useState('')

  useEffect(() => {
    // Logic to import action movies from the TMDB API:
    get(`${tmdbUrl}${apiKey}&with_genres=16`)
      .then(response => {
        // console.log(response.data.results)
        setComedyMovies(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleClick = () => {
    console.log('Movie clicked')
  }

  return (
    <div className='mt-5'>
      <h4 className='text-light ms-3 mb-3'>Animated Movies</h4>
      {/* For displaying movie thumbnails and information */}
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
      
      {/* For playing movie trailers according to the movie image clicked*/}
      {/* <div className='m-5'>
          <YouTube videoId="ZtuFgnxQMrA" />
      </div> */}
    </div>
  )
}

export default AnimatedMovies