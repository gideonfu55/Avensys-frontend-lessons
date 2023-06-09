import React, { useEffect, useState } from 'react'
import get from 'axios'
import ".././style.css"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

function ActionMovies() {

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'
  const [ actionMovies, setActionMovies ] = useState([])
  const [ id, setId ] = useState('')

  useEffect(() => {
    // Logic to import action movies from the TMDB API:
    get(`${tmdbUrl}${apiKey}&with_genres=28`)
      .then(response => {
        // console.log(response.data.results)
        setActionMovies(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  })

  const handleClick = (movieName) => {
    movieTrailer(movieName)
      .then(response => {
        // console.log(response)
        const myVideoId = new URLSearchParams(new URL(response).search).get('v')
        console.log(myVideoId)
        setId(myVideoId)
      })
      .catch(error => {
        console.log(error)
      })
    }

  const controls = { 
    width: '100%', 
    height: '700px', 
    playerVars: { autoplay: 1 } 
  }

  return (
    <div className='mt-3'>
      <h4 className='text-light ms-3 mb-3'>Action Movies</h4>
      <div className='movies d-flex'>
        {actionMovies.map(movie => (
          <div className='movie mx-3 mb-3' key={movie.id}>
            <img onClick={ () => handleClick(movie.title) } src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            <div className='movie-info text-light mt-3'>
              <h5>{movie.title}</h5>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <YouTube videoId={id} opts={controls}/>
      </div>
    </div>
  )
}

export default ActionMovies