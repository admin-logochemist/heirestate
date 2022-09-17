import { Button } from '@mui/material';
import './header.css';
import { Router, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Drawer } from 'antd';
import React, { useState } from 'react';
const Header=()=> {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [navWidth,setNavWidth] = useState(false)
  const openNav=()=> {
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
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-between">
                <span  className="main_logo">LOGO</span>
                <button className='sidebar_button' onClick={showDrawer}><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-end navigation_side">
                <span className="main-big-nav-opner">Shop<i class="fa fa-angle-down" aria-hidden="true"></i>
                <div className="big-Navigation w-100 d-flex py-0">
                    <div className="w-50 px-4 py-4 d-flex flex-column border_left_main_nav">
                        <span className="main_logo text-light inner_nav">Kids Fashion</span>
                        <span className="main_logo text-light inner_nav">Mens Fashion</span>
                        <span className="main_logo text-light inner_nav">Women Fashion</span>
                        <span className="main_logo text-light inner_nav">Kitchen</span>
                        <span className="main_logo text-light inner_nav">Laptops</span>
                        <span className="main_logo text-light inner_nav">Mobile</span>
                        <span className="main_logo text-light inner_nav">Gaming</span>
                        <span className="main_logo text-light inner_nav">Tablets</span>
                    </div>
                    <div className="w-50 px-4 py-4 d-flex flex-column">
                    <span className="main_logo text-light inner_nav">Kids Fashion</span>
                        <span className="main_logo text-light inner_nav">Mens Fashion</span>
                        <span className="main_logo text-light inner_nav">Women Fashion</span>
                        <span className="main_logo text-light inner_nav">Kitchen</span>
                        <span className="main_logo text-light inner_nav">Laptops</span>
                        <span className="main_logo text-light inner_nav">Mobile</span>
                        <span className="main_logo text-light inner_nav">Gaming</span>
                        <span className="main_logo text-light inner_nav">Tablets</span>
                    </div>
                </div>
                </span>
                <span >Contact</span>
                <span>About</span>
                <span>Portfolio</span>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Header

