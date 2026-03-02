
import './App.css'
import Home  from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import AddBlog from './Components/AddBlog'
import Blog from './Components/Blog'
import About from './Components/About'
import Contact from './Components/Contact'

import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <>
          <Header />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blog' element={<Blog />}/>
         <Route path="/add-blog" element={<AddBlog />} />
        
        
       
      </Routes>
      <Footer />
     
    </>
  )
}

export default App
