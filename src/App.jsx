import React from 'react'
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Gallery from './Components/gallery/Gallery'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/about/About'
import Blog from './Components/blog/Blog'
import ContactUs from './Components/about/ContactUs'
import Channel from './Components/about/Channel'
import Other from './Components/about/Other'


function App() {
 
  return (<>
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about/' element={<About/>}>
  <Route path='contact' element={<ContactUs/>}/>
  <Route path='channel' element={<Channel/>}/>
  <Route path='other' element={<Other/>}/>
  </Route>

  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/blog' element={<Blog/>}/>
</Routes>
</BrowserRouter>
   </>
  )
}

export default App