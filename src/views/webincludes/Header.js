import { Button } from '@mui/material';
import {useState} from 'react'
import './header.css';
import { Router, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Header=()=> {
  const navigate = useNavigate();

  const [navWidth,setNavWidth] = useState(false)
  const openNav=()=> {
    // document.getElementById("myNav").style.width = "100%";
    // console.log(navWidth)
    setNavWidth(!navWidth)
  }
  
  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }
  return (

    <div className='rtiop'>
    
    {navWidth ? (
      //close
      <div id="myNav" className="overlay" style={{width:  "100%"}}>
      
      <Button className="closebtn" onClick={openNav}>&times;</Button>
      <div className="overlay-content">
      <a><Link to="/">Home</Link></a>
      <a><Link to="product">Products</Link></a>
      <a>Services</a>
      <a>Clients</a>
      <a>Contact</a>
      </div>
      </div>
   ) : 
   
   // open
   <div>
   <Button style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776;</Button>
   </div>
  }
  
    </div>
  )
}

export default Header

