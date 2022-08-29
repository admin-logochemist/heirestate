import React from 'react'
import styles from './footer.css';

import { IconBrandFacebook, IconBrandSkype, IconBrandInstagram, IconBrandLinkedin, IconAnchorOff, IconCloudComputing, IconArticle } from '@tabler/icons';
// const icons = {
//     IconTypography,
//     IconPalette,
//     IconShadow,
//     IconWindmill,
//     IconAnchorOff,
//     IconCloudComputing,
//     IconArticle,
// };

function Footer() {
  return (
     <div className='site-footer'>
     <div className='container'>
       <div className='row'>
         <div className='col-sm-12 col-md-6'>
           <h6>About</h6>
           <p className='text-justify'>Binarychemist.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Binary Chemist focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, React, NextJS,  Android, SQL and Algorithm.</p>
         </div>

         <div className='col-xs-6 col-md-3'>
           <h6>Categories</h6>
           <ul className='footer-links'>
             <li><a>C</a></li>
             <li><a>UI Design</a></li>
             <li><a>PHP</a></li>
             <li><a>Java</a></li>
             <li><a>Android</a></li>
             <li><a>Templates</a></li>
           </ul>
         </div>

         <div className='col-xs-6 col-md-3'>
           <h6>Quick Links</h6>
           <ul className='footer-links'>
             <li><a>About Us</a></li>
             <li><a>Contact Us</a></li>
             <li><a>Contribute</a></li>
             <li><a>Privacy Policy</a></li>
             <li><a>Sitemap</a></li>
           </ul>
         </div>
       </div>
     </div>
     <div className='container'>
       <div className='row'>
         <div className='col-md-8 col-sm-6 col-xs-12'>
           <p className='copyright-text'>Copyright &copy; 2022 All Rights Reserved by 
        <a href='#'>Binary Chemist</a>.
           </p>
         </div>

         <div className='col-md-4 col-sm-6 col-xs-12'>
           <ul className='social-icons'>
             <li><a className='facebook' href='#'><IconBrandFacebook/></a></li>
             <li><a className='twitter' href='#'><IconBrandSkype/></a></li>
             <li><a className='dribbble' href='#'><IconBrandInstagram/></a></li>
             <li><a className='linkedin' href='#'><IconBrandLinkedin/></a></li>   
           </ul>
         </div>
       </div>
     </div>
</div>
  )
}

export default Footer