import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const MainContainer = () => {

  const movie = useSelector(store => store.movie?.nowPlayingMovies); // this '?' is if any error
  if(!movie) return //early return in react

  console.log(movie);

  const {overview, id, title} = movie[4];


  return (
    <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} /> 
    </div>
  )
}

export default MainContainer