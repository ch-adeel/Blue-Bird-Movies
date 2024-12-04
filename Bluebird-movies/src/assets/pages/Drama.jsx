import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Drama() {
    const[movieList, setMovieList]=useState([])
    const getMovie=()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a75a5cbd056e0be800689944d5bb8170")
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
    <div className="w-full bg-gradient-to-r from-yellow-800 to-lime-700 md:p-18 mb-20 md:mb-0">
      <div className="flex flex-wrap justify-center gap-2 pt-10 pl-6">
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-20 h-8">
      <Link to="/action">Action</Link>
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
       <Link to="/adventure"> Adventure </Link>
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
      <Link to="/animation">Animation</Link>  
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
      <Link to="/comedy">Comedy</Link>  
        
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
      <Link to="/crime">Crime</Link> 
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
      <Link to="/Documentary">Documentary</Link> 
      </li>
      <li className="list-none text-center pt-1 text-black rounded-xl bg-white hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Drama
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Family
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Fantasy
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        History
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Horror
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Music
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Mystery
      </li>
      <button className="text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Romance
      </button>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-36 h-8">
        Science Fiction
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-36 h-8">
        TV Movie
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Thriller
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        War
      </li>
      <li className="list-none text-center pt-1 text-white rounded-xl bg-slate-700 hover:bg-gray-300 hover:font-bold hover:text-black cursor-pointer w-28 h-8">
        Western
      </li>
      </div>
      <header className='flex items-center justify-center text-3xl md:text-4xl font-bold text-blue-300 py-3 px-5 md:px-10 pt-10'>Genres</header>
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
