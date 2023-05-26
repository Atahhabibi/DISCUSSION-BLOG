import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Food from "./components/Food/Food"
import Memes from "./components/Memes/Memes"
import Box from "./components/Boxed/Box"
import  Politics from './components/Politics/Politics'
import Sport from './components/Sports/Sport';
import Other from "./components/Other/Other"



const App = () => {
  return (
      <Router>
        <Header />

        <Routes>


          <Route index path='/' element={<Homepages/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route  path='/culture' element={<Culture/>} />
          <Route  path='/politics' element={<Politics/>} />
          <Route  path='/food' element={<Food/>} />
          <Route  path='/memes' element={<Memes/>} />
          <Route  path='/sports' element={<Sport/>} />
          <Route  path='/boxed' element={<Box/>} />
          <Route  path='/other/:title' element={<Other/>} />


        </Routes>
  

        <Footer />
      </Router>
  )
}

export default App
