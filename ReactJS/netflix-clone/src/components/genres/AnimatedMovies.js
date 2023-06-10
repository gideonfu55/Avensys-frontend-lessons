/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import get from 'axios'
// import YouTube from 'react-youtube'
import ".././style.css"
import YouTube from 'react-youtube'

function AnimatedMovies() {

  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
  const ydApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const ydUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'
  const [ animatedMovies, setAnimatedMovies ] = useState([])
  const [ id, setId ] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await get(`${tmdbUrl}${tmdbApiKey}&with_genres=16`);
        setAnimatedMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [tmdbApiKey])

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
    <div className='mt-5'>
      <h4 className='text-light ms-3 mb-3'>Animated Movies</h4>
      {/* For displaying movie thumbnails and information */}
      <div className='movies d-flex'>
        {animatedMovies.map(movie => (
          <div className='movie mx-3 mb-3' key={movie.id}>
            <img onClick={ () => handleClick(movie.title) } src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
            <div className='movie-info text-light mt-3'>
              <h5>{movie.title}</h5>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
      
      <h5 className='text-light ms-3 mb-3 mt-5'>Animated Movies Trailer</h5>
      <center>
        <div>
          <YouTube videoId={id} opts={controls}/>
        </div>
      </center>
    </div>
  )
}

export default AnimatedMovies