import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube'
import { fetchMovies, fetchVideoId, setGenreId } from './MovieRedux';

function MoviesRedux({ genreId, genreTitle }) {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.movies);
  const videoId = useSelector(state => state.movieReducer.videoId);
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
  const ydApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
  const ydUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='
  const imageUrl = 'https://image.tmdb.org/t/p/w200'

  useEffect(() => {
    dispatch(setGenreId(genreId));
    dispatch(fetchMovies(tmdbUrl, genreId, tmdbApiKey));
  }, [dispatch, genreId, tmdbApiKey])

  const handleClick = (movieTitle) => {
    dispatch(fetchVideoId(ydUrl, ydApiKey, movieTitle));
  };

  // Set the YouTube player controls:
  const controls = { 
    width: '80%', 
    // height: '700px', 
    playerVars: { autoplay: 1 } 
  }

  return (
    <div className='mt-3'>
      <h4 className='text-light ms-3 mb-3'>{genreTitle} Movies</h4>
      <div className='movies d-flex'>
        {movies.map(movie => (
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
          <YouTube videoId={videoId} opts={controls}/>
        </div>
      </center>
    </div>
  )
}

export default MoviesRedux