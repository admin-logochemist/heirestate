import { Button } from '@mui/material';
import './header.css';
import { Router, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import React, { useState } from 'react';
const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [navWidth, setNavWidth] = useState(false)
  const openNav = () => {
    // document.getElementById("myNav").style.width = "100%";
    // console.log(navWidth)
    setNavWidth(!navWidth)
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (

    <div className="Header">
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-12 d-flex align-items-center justify-content-start">
            <span className="main_logo">LOGO</span>
            <button className='sidebar_button' onClick={showDrawer}><i class="fa fa-bars" aria-hidden="true"></i></button>
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <Link to="/Products">For Sale</Link>
            <a href="/">For Rent</a>
            <a href="/">New Property</a>
            <Link to="/Contact">Contact</Link>
            <a href="/">Blog</a>
          </div>
          <div className="col-lg-3 col-12 d-flex align-items-center justify-content-end">
            <button>Login/Register</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header

