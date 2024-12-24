import React from 'react'
import './index.css';  // Ensure this is at the top of your file
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';
import MovieDialog from './components/MovieDialog';

function App() {
  return (
    <div>
      <Body />
      <Toaster />
      <MovieDialog />
      </div>
  )
}

export default App