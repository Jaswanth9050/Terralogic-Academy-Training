import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes}from 'react-router-dom'
import Home from './Home'
import About from './About'
import Post from './component/Post'
import NotFound from './component/NotFound'
import Navigate from './component/Navigate'
const App = () => {
  return (
    <>
    < Router>
    <nav>
      <Link to={'/'}>Home</Link> | <Link to={'/about'}>About</Link> | <Link to={'/posts/1'}>Post</Link> | <Link to={'/navigate'}>Navigate</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts/:id' element={<Post/>}/>
      <Route path='/navigate' element={<Navigate/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App