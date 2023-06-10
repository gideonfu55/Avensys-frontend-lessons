/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import get from 'axios'
import "./style.css"
import YouTube from 'react-youtube'

function Movies({ genreId, genreTitle }) {

  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
  const ydApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const ydUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'
  const [ Movies, setMovies ] = useState([])
  const [ id, setId ] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await get(`${tmdbUrl}${tmdbApiKey}&with_genres=${genreId}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [tmdbApiKey, genreId])

  const handleClick = async(movieTitle) => {
    try {
      // Search for the movie trailer on YouTube:
      const searchQuery = `${encodeURIComponent(movieTitle)}+trailer`;
      const response = await get(`${ydUrl}${searchQuery}&key=${ydApiKey}`);
      
      // Extract the videoId from the response's data:
      const myVideoId = response.data.items[0].id.videoId;

      if (myVideoId) {
        setId(myVideoId);
      } else {
        console.log('Video ID not found.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const controls = { 
    width: '80%', 
    height: '700px', 
    playerVars: { autoplay: 1 } 
  }

  return (
    <div className='mt-3'>
      <h4 className='text-light ms-3 mb-3'>{genreTitle} Movies</h4>
      <div className='movies d-flex'>
        {Movies.map(movie => (
          <div className='movie mx-3 mb-3' key={movie.id}>
            <img onClick={ () => handleClick(movie.title) } src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            <div className='movie-info text-light mt-3'>
              <h5>{movie.title}</h5>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>

      <h5 className='text-light ms-3 mb-3 mt-5'>{genreTitle} Movies Trailer</h5>
      <center>
        <div>
          <YouTube videoId={id} opts={controls}/>
        </div>
      </center>
    </div>
  )
}

export default Movies