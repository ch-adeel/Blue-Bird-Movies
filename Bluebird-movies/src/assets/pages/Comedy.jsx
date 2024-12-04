import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Comedy() {
    const[movieList, setMovieList]=useState([])
    const getMovie=()=>{
        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=a75a5cbd056e0be800689944d5bb8170")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
      }
      
      useEffect( ()=>{
      getMovie()},[])
      
      console.log(movieList)
    
  return (
    <div>
           
      <div className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[10rem]">
        <div className="h-full w-full bg-black/30 flex justify-center items-center">
        <input type="text" className="p-3 w-full mx-10 md:w-[40rem] rounded-xl outline-none" placeholder='Search Movie'/>    
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-cyan-500 to-yellow-500 md:p-18 mb-20 md:mb-0">
        <div className="flex flex-wrap justify-center gap-2 pt-10 pl-6">
        <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black  w-20 h-8">
        <Link to="/action">Action</Link>
        </li>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
        <Link to="/adventure"> Adventure </Link>
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
        <Link to="/animation">Animation</Link> 
        </button>
        <button className="text-black rounded-xl bg-white hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
        <Link to="/comedy">Comedy</Link>  
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
        <Link to="/crime">Crime</Link> 
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Documentary
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Drama
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Family
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Fantasy
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          History
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Horror
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Music
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Mystery
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Romance
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-36 h-8">
          Science Fiction
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-36 h-8">
          TV Movie
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Thriller
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          War
        </button>
        <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black w-28 h-8">
          Western
        </button>
        </div>
        <header className='flex items-center justify-center text-3xl md:text-4xl font-bold text-white py-3 px-5 md:px-10'>Genres</header>
      <div className="w-full justify-center">
      <div className="flex justify-center flex-wrap pt-12 gap-10 py-4">
        {movieList.map((movie)=>(
          <img className='h-96 rounded-3xl' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        ))}
      </div>
      </div>
      </div>
      </div>
  )
}
