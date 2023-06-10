import get from 'axios'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// Create initial state:
const initialState = {
  movies: [],
  videoId: '',
  genreTitle: ''
};

// Create actions:
export const fetchMovies = (tmdbUrl, genreId, tmdbApiKey) => async (dispatch) => {
  try {
    const response = await get(`${tmdbUrl}${tmdbApiKey}&with_genres=${genreId}`);
    dispatch(setMovies(response.data.results));
  } catch (error) {
    console.error(error);
  }
};

export const fetchVideoId = (ydUrl, movieTitle, ydApiKey) => async(dispatch) => {
  try {
    // Improve search terms:
    const searchQuery = `${encodeURIComponent(movieTitle)}+trailer`;

    // Search for the movie trailer data on YouTube Data API:
    const response = await get(`${ydUrl}${searchQuery}&key=${ydApiKey}`);
  
    // Get the youtube videoId from the response's data:
    const myVideoId = response.data.items[0].id.videoId;

    // Set the videoId state if it exists, else log an not found message:
    if (myVideoId) {
        dispatch(setVideoId(myVideoId));
    } else {
        console.log('Video ID not found.');
    }

  } catch (error) {
    console.log(error);
  }
}

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}

export const setVideoId = (videoId) => {
  return {
    type: 'SET_VIDEO_ID',
    payload: videoId
  }
}

export const setGenreId = (genreId) => {
  return {
    type: 'SET_GENRE_ID',
    payload: genreId
  }
}

// Create Reducer:
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_VIDEO_ID':
      return { ...state, videoId: action.payload };
    case 'SET_GENRE_ID':
      return { ...state, genreId: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movieReducer: movieReducer
})

// Create Redux Store"
export const movieStore = createStore(rootReducer, applyMiddleware(thunk));

