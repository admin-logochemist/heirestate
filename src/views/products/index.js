// import React from 'react'
import Header from '../webincludes/Header';
import styles from './product.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from '../webincludes/Footer';

import { IconBrandFacebook, IconBrandSkype, IconBrandInstagram, IconBrandLinkedin, IconAnchorOff, IconCloudComputing, IconArticle, IconBuildingCommunity } from '@tabler/icons';




const Product = () => {

  const images = [
    {
      original: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },

  ];

  return (
    <>
      <div>
        <Header />
        <ImageGallery items={images} fullscreen={true} />;
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 '>
            <h1 className='jhfjhds'>For Sale</h1>
          </div>
          <div className='col-sm-4'>
            <p className='ghyau'>7082 LA PRESA DRIVE</p>
            <p className='jsfdj'>7082 LA PRESA DRIVE, LOS ANGELES, CA 90068</p>
          </div>
          <div class="w-100"></div>
          <div className='col-sm-6 dhja'>
            <p className='jsfdj'>$2,995,000</p>
          </div>
        </div>
        <div className='row madfkdf'>
          <div className='col-sm-6'>
            <p>An exceptional development opportunity in this prime Hollywood Hills location, so bring your contractor! The split-level, 3,793 square foot hillside home boasts 3 spacious bedrooms, 3 full baths, plus a bonus room, with a patio wrapped around the master-suite. As you enter through the private gate, the private patio wraps around the ground level floor and you step into the open floor plan concept with kitchen, dining area, and living room with fireplace. The entire back of the home is lined with windows that open up to gorgeous panoramic views and bring in ample amounts of light throughout the home.</p>
            <p>An exceptional development opportunity in this prime Hollywood Hills location, so bring your contractor! The split-level, 3,793 square foot hillside home boasts 3 spacious bedrooms, 3 full baths, plus a bonus room, with a patio wrapped around the master-suite. As you enter through the private gate, the private patio wraps around the ground level floor and you step into the open floor plan concept with kitchen, dining area, and living room with fireplace. The entire back of the home is lined with windows that open up to gorgeous panoramic views and bring in ample amounts of light throughout the home.</p>
            <p>An exceptional development opportunity in this prime Hollywood Hills location, so bring your contractor! The split-level, 3,793 square foot hillside home boasts 3 spacious bedrooms, 3 full baths, plus a bonus room, with a patio wrapped around the master-suite. As you enter through the private gate, the private patio wraps around the ground level floor and you step into the open floor plan concept with kitchen, dining area, and living room with fireplace. The entire back of the home is lined with windows that open up to gorgeous panoramic views and bring in ample amounts of light throughout the home.</p>

          </div>
          <div className='col-sm-6 fsgik'>
            <div className='col-sm-5 testing'>
              <IconAnchorOff className='ehkop' />
              <p className='fghsipo'>3 BEDS</p>
            </div>
            <div className='col-sm-5 testing'>
              <IconArticle className='ehkop' />
              <p className='fghsipo'>3 BATHS</p>
            </div>
            <div className='col-sm-5 testing'>
              <IconBuildingCommunity className='ehkop' />
              <p className='fghsipo'>3,793 SQ.FT.LIVING AREA</p>
            </div>
            <div className='col-sm-5 testing'>
              <IconCloudComputing className='ehkop' />
              <p className='fghsipo'>0.259 ACRES LOT</p>
            </div>

          </div>
        </div>
        <div className='row dasjf'>
        <div className='col-lg-6 gfhdjs'><p className='tejsdnf'>THE GROUP OF REAL ESTATE</p></div>
        <div className='col-lg-6 sdlkmmd'>
        <p className='ufsjd'>Adding value is the forefront of all our work here at The Group. At the end of the day, maximizing the value of your largest asset is the goal in each real estate transaction. Whether it’s showcasing and negotiating high-end luxury properties, meticulously processing probate/trust sales or representing buyers in the purchase of their first home.</p></div>
        </div>
      </div>
      
      <div>
      <Footer />
  </div>
    </>
  )
}

export default Product