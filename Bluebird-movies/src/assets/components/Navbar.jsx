import React from 'react'
import logo from  '../images/logo.png';
import movies from '../images/movies.jpg'
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
export default function Navbar() {
  const handleGoogle = async (e) =>{
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
  }
  return (
    <>
    <div className="bg-gradient-to-br from-rose-500 to-cyan-500 border-r-2 border-stone-500 w-1/6 h-full fixed flex flex-col justify-center   p-4">
      
    <img src={logo} alt="Logo" className="mx-auto h-16 sm:h-24 w-auto mt-4 sm:mt-0" />
<h1 className="text-2xl text-center text-fuchsia-950 font-bold sm:text-xs  lg:text-2xl pt-2"> Bluebird Cinematica</h1>

       <ul className="flex flex-col sm:flex-row sm:flex-wrap mt-12 gap-4">
  <li className="text-white bg-zinc-800 w-auto lg:w-44 sm:w-auto  h-10 ml-2 sm:mt-0 sm:mr-2 mb-2 hover:bg-blue-500 hover:border-blue-800 border-4 border-zinc-800 text-center rounded-md">
    <Link to="/genre">Genres</Link>
  </li>
  <li className="text-white bg-zinc-800 w-auto lg:w-44 sm:w-auto h-10 ml-2 sm:mt-0 sm:mr-2 mb-2 hover:bg-blue-500 hover:border-blue-800 border-4 border-zinc-800 text-center rounded-md">
    <Link to="/trending">Trending</Link>
  </li>
  <li className="text-white bg-zinc-800 w-auto lg:w-44 sm:w-auto h-10 ml-2 sm:mt-0 sm:mr-2 mb-2 hover:bg-blue-500 hover:border-blue-800 border-4 border-zinc-800 text-center rounded-md">
    <Link to="/upcoming">Upcoming</Link>
  </li>
  <li className="text-white bg-zinc-800 w-auto lg:w-44 sm:w-auto h-10 ml-2 sm:mt-0 sm:mr-2 mb-2 hover:bg-blue-500 hover:border-blue-800 border-4 border-zinc-800 text-center rounded-md">
    <Link to="/favorities">Favorites</Link>
  </li>
</ul>     
      <button onClick={handleGoogle} className="text-white mt-auto bg-gray-900 w-full h-12 hover:bg-red-500 border rounded-2xl">Log in</button>
    </div>
    <div className="class">
      <img src={movies} alt="Movies-Temp" className='w-full h-full' />
    </div>
    
      </>
     
  )
}
