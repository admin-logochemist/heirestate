// import React from 'react'
import React, { useState } from "react"
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer';
import "./productdetail.css"
import cardImg1 from "../../assets/images/banner/card1.jpg"
import cardImg2 from "../../assets/images/banner/card2.jpg"
import cardImg3 from "../../assets/images/banner/card3.jpg"
import cardImg4 from "../../assets/images/banner/card4.jpg"
import { Rate,Tabs,Checkbox  } from 'antd';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ProductDetail = () => {
  const [value, setValue] = useState(3);

  const defaultProps = {
    center: {
      lat: 24.900966381731603,
      lng: 67.16818852812051
    },
    zoom: 11
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='container-fluid px-5 py-5'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='Product_detail_gallery d-flex'>
              <div className='Product_detail_gallery_left'>
                <img style={{ width: "100%", height: "540px" }} className='img-fluid' src={cardImg1} alt="" />
              </div>
              <div className='Product_detail_gallery_right'>
                <div className='Product_detail_gallery_left_grid_1'>
                  <img src={cardImg2} style={{ width: "100%", height: "176px" }} alt="" />
                </div>
                <div className='Product_detail_gallery_left_grid_2'>
                  <img src={cardImg4} style={{ width: "100%", height: "178px" }} className='img-fluid' alt="" />
                </div>
                <div className='Product_detail_gallery_left_grid_3'>
                  <img src={cardImg3} style={{ width: "100%", height: "176px" }} className='img-fluid' alt="" />
                  <div className='Product_detail_gallery_left_grid_3_hover'>+4 Photos</div>
                </div>
              </div>
            </div>
            <div className='Product_detail_feature d-flex align-items-center'>
              <div className='d-flex align-items-center py-4'>
                <span className='top_value_tag'>Top Value</span>
                <span className='new_tag'>New</span>
                <div className="px-2">
                  <Rate onChange={setValue} value={value} />
                </div>
              </div>
            </div>
            <div className='Product_detail_detail'>
              <h3>Maxone Ascent Society Luxury Kota Malang</h3>
              <h6>Jln. Diponegoro V no.12, Kec. Lowokowara, Kota Malang </h6>
              <div className="pt-4">
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Description" key="1">
                    <div className="py-3">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum purus felis, vitae blandit nisi cursus eu. In vitae elit eget nibh scelerisque pretium. Pellentesque in enim facilisis, gravida metus sed, dictum lectus. Praesent rhoncus, justo eu malesuada molestie, massa nibh laoreet nisl, at tincidunt turpis leo at eros. Etiam tempus quam in diam finibus porta. Maecenas vitae odio auctor, placerat mi a, mollis quam. Suspendisse potenti. Nam nisl risus, eleifend non laoreet quis, euismod eu lacus. Nulla blandit ullamcorper sapien sit amet malesuada.
                      </p>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Features" key="2">
                    <div className="py-3">
                      <p>
                      Etiam finibus ac nibh euismod tempor. Pellentesque quam sem, dignissim rutrum bibendum nec, viverra ut lectus. Nulla at blandit ex, eu hendrerit est. Nunc gravida, purus egestas tincidunt posuere, risus nisi maximus augue, vel ullamcorper odio nunc sit amet nisl. Nullam non ipsum justo. Vestibulum ac eros turpis. Quisque est ante, pellentesque nec arcu id, lacinia aliquam eros. Nullam ac libero ultrices, vestibulum lorem vitae, interdum arcu. Aliquam malesuada orci vel metus facilisis, a ultricies nulla ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit                      </p>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Price & Task History" key="3">
                    <div className="py-3">
                      <p>
                      Mauris facilisis ultricies congue. Vestibulum nec efficitur risus, vitae porttitor enim. Vivamus ullamcorper massa at imperdiet vulputate. Vivamus et nibh consequat, lacinia velit nec, sagittis nunc. Phasellus bibendum enim nec turpis viverra pellentesque. Nunc quam elit, sodales quis semper eu, fringilla bibendum orci. Morbi vel lorem a neque imperdiet ultricies et vitae ex. Vivamus ut mi tellus. Aliquam ultrices turpis a magna interdum tempus                      </p>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <div className="property_feature">
                  <div className="d-flex align-items-center">
                     <span><img src="https://img.icons8.com/ios/25/22C3E6/bed.png" alt="aa"/> 4 King Bedrooms</span>
                     <span><img src="https://img.icons8.com/ios/25/22C3E6/kitchen-room.png" alt="aa"/> 2 Kitchens</span>
                     <span><img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/25/22C3E6/external-bathroom-interior-xnimrodx-lineal-xnimrodx-2.png" alt="aa"/> 4 Bathrooms</span>
                     <span><img src="https://img.icons8.com/ios/25/22C3E6/swimming-pool.png" alt="aa"/> Swiming Pool</span>
                  </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 px-4'>
            <div className="extra_feature">
                <h3>$50k</h3>

                <hr />
                <p>Location</p>
                <div style={{width:"100%",height:"300px"}}>

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
                <hr />
                <p>Extra Features</p>
                <div className="d-flex align-items-center justify-content-between extra_feature_check py-2">
                  <Checkbox>Extra Lightning</Checkbox>
                  <p>$6700</p>
                </div>

                <div className="d-flex align-items-center justify-content-between extra_feature_check py-2">
                  <Checkbox>Glass Roof</Checkbox>
                  <p>$93200</p>
                </div>

                <div className="d-flex align-items-center justify-content-between extra_feature_check py-2">
                  <Checkbox>Rooftop Garden</Checkbox>
                  <p>$12000</p>
                </div>

                <hr />
                <p>Price</p>
                <div className="dark-hall-Price px-3 py-2">
                  <div className="Pricing_section_highlight d-flex align-items-center justify-content-between extra_feature_check py-2">
                    <p>Extra Lightning</p>
                    <p>$6700</p>
                  </div>

                  <div className="Pricing_section_highlight d-flex align-items-center justify-content-between extra_feature_check py-2">
                    <p>Glass Roof</p>
                    <p>$6700</p>
                  </div>

                  <div className="Pricing_section_highlight d-flex align-items-center justify-content-between extra_feature_check py-2">
                    <p>Rooftop Garden</p>
                    <p>$6700</p>
                  </div>
                </div>
                <hr />
                <button className="product_detail_book_now">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail