import React,{useState} from "react";
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer';
import "../sample-page/stylez.css"
import "./product.css"
import {Link} from "react-router-dom"
import cardImg1 from "../../assets/images/banner/card1.jpg"
import cardImg2 from "../../assets/images/banner/card2.jpg"
import cardImg3 from "../../assets/images/banner/card3.jpg"
import cardImg4 from "../../assets/images/banner/card4.jpg"
import cardImg5 from "../../assets/images/banner/card5.jpg"
import cardImg6 from "../../assets/images/banner/card6.jpg"
import cardImg7 from "../../assets/images/banner/card7.jpg"
import cardImg8 from "../../assets/images/banner/card8.jpg"
import GoogleMapReact from 'google-map-react';
import { Carousel } from 'antd';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Product =()=>{
    const [carddata,setcarddata]=useState([
        {
            img:cardImg1,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg2,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg3,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg4,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg5,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg6,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg7,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg8,
            price:"30.000",
            name:"Ville le cua's",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        }
    ])
    const defaultProps = {
        center: {
          lat: 24.900966381731603,
          lng: 67.16818852812051
        },
        zoom: 11
      };
      const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
      const contentStyle = {
        height: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <>  
            <div>
                <Header/>
            </div>
            <div className="container-fluid">
                <div className="">
                    <div className="col-lg-12 p-0">
                        <div className="product_filtration">
                            <div className="product_filtration_search">
                                <img alt="aa" src="https://img.icons8.com/ios/20/1A1A1A/search--v1.png"/>
                                <input type="text" placeholder="Search Here"/>
                            </div>
                            <select name="" id="">
                                <option value="aa">For sale</option>
                                <option value="aa">For sale</option>
                                <option value="aa">For sale</option>
                                <option value="aa">For sale</option>
                            </select>
                            <select name="" id="">
                                <option value="aa">Type:House</option>
                                <option value="aa">Type:House</option>
                                <option value="aa">Type:House</option>
                                <option value="aa">Type:House</option>
                            </select>
                            <select name="" id="">
                                <option value="aa">Min Price:$500k</option>
                                <option value="aa">Min Price:$500k</option>
                                <option value="aa">Min Price:$500k</option>
                                <option value="aa">Min Price:$500k</option>
                            </select>
                            <select name="" id="">
                                <option value="aa">Max Price:$900k</option>
                                <option value="aa">Max Price:$900k</option>
                                <option value="aa">Max Price:$900k</option>
                                <option value="aa">Max Price:$900k</option>
                            </select>
                            <select name="" id="">
                                <option value="aa">Floor Area:60m</option>
                                <option value="aa">Floor Area:60m</option>
                                <option value="aa">Floor Area:60m</option>
                                <option value="aa">Floor Area:60m</option>
                            </select>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 product_side_scroll">
                            <div className='row'>
                                {carddata!==undefined&&carddata!==null&&carddata!==""?carddata.map((data)=>(
                                    <div className='col-lg-6 col-md-6 col-12 p-2'>
                                        <div className='property_card'>
                                            <div className='image_section'>
                                                <Carousel autoplay={true} draggable={true} afterChange={onChange} >
                                                        <img style={contentStyle} src={cardImg7} alt="aa" />
                                                        <img style={contentStyle} src={cardImg2} alt="aa" />
                                                        <img style={contentStyle} src={cardImg3} alt="aa" />
                                                        <img style={contentStyle} src={cardImg5} alt="aa" />
                                                </Carousel>
                                                <div className='product-card-heart-hover'>
                                                    <img src="https://img.icons8.com/material-outlined/25/1A1A1A/like--v1.png" alt='aa'/>
                                                </div>
                                                <div className='product-card-heart-hove2'>
                                                   <span className="for_sale">New</span>
                                                   <span className="featured">Featured</span>
                                                </div>
                                            </div>
                                            <div className='detail_section'>
                                                <div className='d-flex align-items-center mb-2'>
                                                    <span>{data.feature}</span>
                                                </div>
                                                <Link to="/ProductDetail">{data.name}</Link>
                                                <h6 className="mt-2">${data.price}</h6>
                                                <p className='m-0'>{data.detail}</p>
                                                <div className='d-flex align-items-center'>
                                                    <span className='d-flex align-items-center'><img src="https://img.icons8.com/ios/20/22C3E6/bed.png" alt="aa" className='mr-1'/>{data.rooms} Bedrooms</span>
                                                    <span className='d-flex align-items-center'><img src="https://img.icons8.com/carbon-copy/20/22C3E6/kitchen-room.png" alt='aa' className='mr-1'/>{data.kitchen} Kitchen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )):""}
                                </div>
                        </div>
                        <div className="col-lg-6">
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;