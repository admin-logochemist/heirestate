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
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
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