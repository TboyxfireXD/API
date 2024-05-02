// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import MovieBox from './MovieBox'

// const App = () => {
//   const API_URL = 'https://api.themoviedb.org/3/movihttps://api.themoviedb.org/t/p/w500/e/popular?api_key =5f13d4e3e7df06b5fb904015b934cc00'
//   const [movies, setMovies] = useState([])
//   useEffect(()=>{
//     fetch(API_URL)
//    .then(res => res.json())
//    .then(data => setMovies(data.results))
//   },[])
//   return (
//     <div>
//       {movies.map((i) => {
//         <MovieBox />
//       })}
//     </div>
//   )
// }

// export default App

import React from 'react'
import Super from './Super'

const App = () => {
  return (
    <div>
      <Super />
    </div>
  )
}

export default App
