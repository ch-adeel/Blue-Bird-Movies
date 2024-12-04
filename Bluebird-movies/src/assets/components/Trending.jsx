import React from 'react'
import { useEffect, useState } from 'react';
export default function Trending() {
  const [movieList, setMovieList] = useState([])
  const getMovie= ()=>{
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a75a5cbd056e0be800689944d5bb8170")
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }
  
  useEffect( ()=>{
  getMovie()},[])
  
  console.log(movieList)
  return (
    <>
       <div className="h-auto bg-gradient-to-br from-rose-500 to-cyan-500">
        <div className="flex justify-center pt-9 text-4xl font-bold">
            <h1 className="text-white  underline underline-offset-1">
                Trending Movies
            </h1>
            </div>
            <div className="flex justify-center flex-wrap pt-12 gap-10 py-4">
        {movieList.map((movie)=>(
          <img className='h-96 rounded-3xl' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        ))}
              </div>
        </div>
  </>      
      
  )
}
