import './App.css'
import Navbar from './assets/components/Navbar'
import Genre from './assets/components/Genre'
import Trending from './assets/components/Trending'
import Upcoming from './assets/components/Upcoming'
import Favorities from './assets/components/Favorities'
import Action from './assets/pages/Action'
import Adventure from './assets/pages/Adventure'
import  Animation from './assets/pages/Animation'
import Comedy from './assets/pages/Comedy'
import Crime from './assets/pages/Crime'
import Documentary from './assets/pages/Documentary'
import Drama from './assets/pages/Drama'


import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
  <div className='flex '>      
    <div className="w-1/6 ">
    <Navbar/>
        </div>
    <div className="w-full ">
    <Routes>
     
      <Route path="genre/" element={<Genre />}></Route>
      <Route path="trending/" element={<Trending />}></Route>
      <Route path="upcoming/" element={<Upcoming/>}></Route>
      <Route path="favorities/" element={<Favorities/>}></Route>  
      <Route path="action/" element={<Action/>}></Route>  
      <Route path="adventure/" element={<Adventure/>}></Route>
      <Route path="animation/" element={<Animation/>}></Route>
      <Route path="comedy/" element={<Comedy/>}></Route>  
      <Route path="Crime/" element={<Crime/>}></Route>
      <Route path="Documentary/" element={<Documentary/>}></Route>
      <Route path="Drama/" element={<Drama/>}></Route>
  </Routes>
    </div>
  </div>
    </>
  )
}

export default App
