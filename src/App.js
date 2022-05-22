import React,{ useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbarcomponents/index';
import Dropdown from "./Dropdowncomponents/Dropdown";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import Footer from './Footercomponent/Footer';

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
      <Router>
          <Navbar toggle = {toggle}/>
          <Dropdown isOpen = {isOpen} toggle ={toggle}/>
          <div>
          <Routes>
              <Route path ="/" element = {<Home/>}/>
              <Route path ="/login" element = {<Blog/>}/>
              <Route path ="/Home" element ={<Contact/>}/>
              <Route  path = "/Men" element ={<Aboutus/>}/>
          </Routes>
          <Footer/>
          </div>
      </Router>
  )
}

export default App;
