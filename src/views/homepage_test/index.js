import React,{useState} from "react";
import "./homepage_style.css"
import Card_image from "../../assets/images/banner/product_card.jpg"
import adbrandlogo from "../../assets/images/banner/tskh7re5xjsixop7lnxd.webp"
import Logo1 from "../../assets/images/banner/g5qzbyky8ifp5w0ex0ik.webp"
import Logo2 from "../../assets/images/banner/lbouq1izb29w0tlzxhyy.webp"
import Logo3 from "../../assets/images/banner/nx9czj3wmayjxybtm5dl.webp"
import Header from "../webincludes/Header"
import 'animate.css';
import { Carousel } from 'antd';
const Hometest =()=>{
    const [data,setdata] = useState( [
        {
            image:Card_image,
            name:"7082 La Presa Drive",
            detail:"7082 La Presa Drive, Los Angeles, CA 90068",
            adress:"3 BD | 3 BA | 3,793 Sq.Ft.",
            price:"$2,995,000"
        },
        {
            image:Card_image,
            name:"7082 La Presa Drive",
            detail:"7082 La Presa Drive, Los Angeles, CA 90068",
            adress:"3 BD | 3 BA | 3,793 Sq.Ft.",
            price:"$2,995,000"
        },
        {
            image:Card_image,
            name:"7082 La Presa Drive",
            detail:"7082 La Presa Drive, Los Angeles, CA 90068",
            adress:"3 BD | 3 BA | 3,793 Sq.Ft.",
            price:"$2,995,000"
        },
        {
            image:Card_image,
            name:"7082 La Presa Drive",
            detail:"7082 La Presa Drive, Los Angeles, CA 90068",
            adress:"3 BD | 3 BA | 3,793 Sq.Ft.",
            price:"$2,995,000"
        }
    ])

    return(
        <div id="subject-body">
        <Header/>
            <div className="px-3 pt-0 pb-0 subject">
                <Carousel dots={true}>
                <div className="main_banner">
                    <div className="main_banner_overlay">
                        <div className="text-center">
                            <h1 className="animate__animated animate__backInDown">FEATURED PROPERTIES</h1>
                            <h6 className="animate__animated animate__backInUp">Browse our exclusive listings.</h6>
                        </div>
                    </div>
                </div>
                <div className="main_banner">
                    <div className="main_banner_overlay">
                        <div className="text-center">
                            <h1 className="animate__animated animate__backInDown">FEATURED PROPERTIES</h1>
                            <h6 className="animate__animated animate__backInUp">Browse our exclusive listings.</h6>
                        </div>
                    </div>
                </div>
                <div className="main_banner">
                    <div className="main_banner_overlay">
                        <div className="text-center">
                            <h1 className="animate__animated animate__backInDown">FEATURED PROPERTIES</h1>
                            <h6 className="animate__animated animate__backInUp">Browse our exclusive listings.</h6>
                        </div>
                    </div>
                </div>
                <div className="main_banner">
                    <div className="main_banner_overlay">
                        <div className="text-center">
                            <h1 className="animate__animated animate__backInDown">FEATURED PROPERTIES</h1>
                            <h6 className="animate__animated animate__backInUp">Browse our exclusive listings.</h6>
                        </div>
                    </div>
                </div>
                </Carousel>
            </div>
            <div className="container-fluid p-5 animate__animated animate__backInLeft">
                <div className="row">
                    {data!==undefined&&data!==null&&undefined!==""?
                        data.map((data)=>(
                        <div className="col-lg-6 px-4 mt-4">
                        <div className="sales_card">
                            <div className="sales_card_image">
                                <img src={Card_image} alt="image_banner" />
                                <span>FOR SALE</span>
                                <div className="sales_card_hover">
                                <button>VIEW PROPERTY</button>
                                </div>
                            </div>
                            <div className="sales_card_detail text-center py-4">
                                <h4>{data.name}</h4>
                                <p>{data.detail}</p>
                                <p>{data.adress}</p>
                                <h5>{data.price}</h5>
                            </div>
                        </div>
                    </div>
                    )):""
                    }
                </div>
            </div>
            <div className="container-fluid pagination pb-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <div class="left_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
                        <div className="d-flex align-items-center">
                            <div class="left_arrow_active"><span>1</span></div>
                            <div class="right_arrow"><span>2</span></div>
                        </div>
                        <div class="right_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div className="main_banner_2">
                    <div className="main_banner_overlay">
                        <div className="text-center">
                            <h2>CONTACT US</h2>
                            <h6 className="mt-3">If you are in need of a court supervised real estate specialist, please enter your contact info<br></br>below.</h6>
                            <div className="d-flex align-items-center justify-content-center mt-4 contant_Form">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container Main_Footer">
                <div className="pt-5">
                    <h3>The CREM Group Real Estate</h3>
                </div>
                <div className="row py-3">
                    <div className="col-lg-6 col-12">
                        <h4>TRUSTED REAL ESTATE SPECIALISTS</h4>
                        <div className="Footer_contacr_email d-flex mt-3">
                            <div style={{width:"30px"}}>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i> 
                            </div>
                            <div className="Footer_contacr_email_content px-3">
                                <h5>EMAIL</h5>
                                <h5 className="mt-1 Footer_contacr_email_content_detail">INFO@CREMGROUPRE.COM</h5>
                            </div>
                        </div>


                        <div className="Footer_contacr_email d-flex mt-5">
                            <div style={{width:"30px"}}>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div className="Footer_contacr_email_content px-3">
                                <h5>ADDRESS</h5>
                                <h5 className="mt-1 Footer_contacr_email_content_detail">(949) 491-1194</h5>
                            </div>
                        </div>




                        <div className="Footer_contacr_email d-flex mt-5">
                            <div style={{width:"30px"}}>
                            <i class="fa fa-map-o" aria-hidden="true"></i> 
                            </div>
                            <div className="Footer_contacr_email_content px-3">
                                <h5>EMAIL</h5>
                                <h5 className="mt-1 Footer_contacr_email_content_detail">LOS ANGELES<br></br>
                                3900 W. ALAMEDA AVE., STE. 1200<br></br>
                                BURBANK, CA 91505</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="Footer_contacr_email d-flex mt-5">
                            <div style={{width:"30px"}} className="pt-4">
                            <i class="fa fa-credit-card" aria-hidden="true"></i>
                            </div>
                            <div className="Footer_contacr_email_content px-3 pt-4">
                                <h5>SIGN UP FOR EXCLUSIVE NEWS</h5>
                                <div className="mail_box mt-3">
                                    <h5>Email Address</h5>
                                    <input className="email_input" type="text" name="" id="" />
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-100 mt-5 secondary_nav">
                    <img className="second_brand_logo" src={adbrandlogo} alt="" />
                    <div className="my-4">
                    <h5>The CREM Group | CA DRE# 02029217</h5>
                    <p>Adding value is the forefront of all our work here at The CREM Group. At the end of the day, maximizing the value of your largest asset is the goal in each real estate transaction. Whether it’s showcasing and negotiating high-end luxury properties, meticulously processing probate/trust sales or representing buyers in the purchase of their first home.</p>
                    <div className="d-flex Footerbranding_logo">
                        <img src={Logo1} alt="" />
                        <img src={Logo2} alt="" />
                        <img src={Logo3} alt="" />
                    </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-center w-100 pt-4 third-nav">
                    <div className="w-50">
                        <p>Copyright © 2022 | Privacy Policy</p>
                    </div>
                    <div className="w-50 d-flex align-items-center justify-content-end">
                        <p>Powered by Luxury Presence</p>
                    </div>
                   
                </div>
                <div className="w-100 d-flex pb-5 pt-3">
                <div className="social-icons ml-0">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social-icons">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hometest;