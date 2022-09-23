// material-ui
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer';
import styles from './stylez.css';
import React,{useState} from 'react';
import 'react-slideshow-image/dist/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import cardImg1 from "../../assets/images/banner/card1.jpg"
import cardImg2 from "../../assets/images/banner/card2.jpg"
import cardImg3 from "../../assets/images/banner/card3.jpg"
import cardImg4 from "../../assets/images/banner/card4.jpg"
import cardImg5 from "../../assets/images/banner/card5.jpg"
import cardImg6 from "../../assets/images/banner/card6.jpg"
import cardImg7 from "../../assets/images/banner/card7.jpg"
import cardImg8 from "../../assets/images/banner/card8.jpg"
import Interior from "../../assets/images/banner/interior.jpg"
// ==============================|| SAMPLE PAGE ||============================== //

const slideImages = [
    {
        url: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
        caption: 'lorem ipsum caption we are working on it',
        heading:'The Most Trusted Real Estate Company'
    },
    {
        url: 'http://www.whatsoninthessaloniki.com/wp-content/uploads/2017/05/properties2.jpg',
        caption: 'lorem ipsum caption we are working on it',
        heading:'The Modern Real Estate Company'
    },
    {
        url: 'https://cdn.houseplansservices.com/content/1crartf4esqstardciellil6mh/w991x660.jpg?v=9',
        caption: 'lorem ipsum caption we are working on it ',
        heading:'We create style, design,motion for your projects.'
    },
];

const property = [
    {
        title: 'Alpha Property',
        image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Alpha Property',
        image: 'https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2017/07/shutterstock_198883310-e1499838393321.jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Alpha Property',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Alpha Property',
        image: 'https://www.jagahonline.com/classified_assets/images/banner-01.jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Alpha Property',
        image: 'https://3.imimg.com/data3/NS/XO/MY-10697870/residential-property-dealer-broker-500x500.jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Alpha Property',
        image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
];

const SamplePage = () => {
    const [searchbar,setsearchbar]=useState(false)
    const [carddata,setcarddata]=useState([
        {
            img:cardImg1,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg2,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg3,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg4,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg5,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg6,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg7,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        },
        {
            img:cardImg8,
            price:"30.000",
            feature:"villa",
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec.",
            rooms:"2",
            kitchen:"3"
        }
    ])
    return(
        <>
        <div>
            <Header />
        </div>


        <div className="search_banner_region">
            <div className='container'>
                <h1 className='animate__animated animate__backInLeft'>Discover a place<br></br> you will love to <span>live.</span></h1>
                <p className='animate__animated animate__backInLeft'>Connect with more than 75 million renters looking for new homes<br></br>using our comprehensive marketing platform</p>
                <div className='main_banner_search_bar d-flex animate__animated animate__backInLeft'>
                    <div className='bar_location d-flex align-items-center px-2'>
                        <img src="https://img.icons8.com/ios/30/22C3E6/map-marker--v1.png" alt='aa'/>
                        <div className='pl-2'>
                            <p>Location</p>
                            <span>Bali, indonasia</span>
                        </div>
                    </div>
                    <div className='bar_price d-flex align-items-center px-2'>
                        <img src="https://img.icons8.com/dotty/30/22C3E6/money.png" alt='aa'/>
                        <div className='pl-2'>
                            <p>Price</p>
                            <span>$5,000-$10,000</span>
                        </div>
                    </div>
                    <div className='bar_type d-flex align-items-center px-2'>
                        <img src="https://img.icons8.com/ios/30/22C3E6/country-house.png" alt='aa'/>
                        <div className='pl-2'>
                            <p>Type of home</p>
                            <span>Apartment</span>
                        </div>
                    </div>
                    <div className={searchbar==false?"hide_search_bar":"hide_search_bar2"}>
                        <input type="text" placeholder='Search Here'/>
                    </div>
                    <button onClick={()=>{searchbar==false?setsearchbar(true):setsearchbar(false)}} className='search_btn'><img src="https://img.icons8.com/ios/30/FFFFFF/search--v1.png" alt='aa' /></button>
                </div>
            </div>
        </div>

        <div className="home_about_section">
            <div className='container'>
                 <div className='row'>
                    <div className='col-lg-6 home_about_section_left_section'>
                        <p>Why Choose Brand Name</p>
                        <h1>Provide The Most<br></br>Complete list of property</h1>
                    </div>
                    <div className='col-lg-6 home_about_section_right_section py-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien, semper eget orci in, ullamcorper pharetra ex. Sed ex enim, viverra ut metus nec, lacinia tempor tellus. Mauris venenatis</p>
                    </div>
                 </div>   
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 p-2 animate__animated animate__backInLeft'>
                        <div className='home_about_card p-4'>
                            <img src="https://img.icons8.com/ios/100/22C3E6/house-with-a-garden.png" alt='aa'/>
                            <div>
                                <h6>Find your dream house</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien, semper eget orci in, ullamcorper pharetra ex. Sed ex enim, viverra ut metus nec, lacinia tempor tellus. Mauris venenatis</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
                        <div className='home_about_card p-4'>
                            <img src="https://img.icons8.com/ios/100/22C3E6/client-company.png" alt='aa'/>
                            <div>
                                <h6>Find place of business</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien, semper eget orci in, ullamcorper pharetra ex. Sed ex enim, viverra ut metus nec, lacinia tempor tellus. Mauris venenatis</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
                        <div className='home_about_card p-4'>
                            <img src="https://img.icons8.com/external-outline-wichaiwi/100/22C3E6/external-rich-generation-z-outline-wichaiwi.png" alt='aa'/>
                            <div>
                                <h6>Smart feature rich</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien, semper eget orci in, ullamcorper pharetra ex. Sed ex enim, viverra ut metus nec, lacinia tempor tellus. Mauris venenatis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

        <div className='home_product_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 home_about_section_left_section'>
                        <p>Property</p>
                        <h1>Property in cities<br></br>and Provience in Indonasia</h1>
                    </div> 
                    <div className='col-lg-5 home_about_section_right_section py-5 d-flex align-items-center justify-content-end'>
                        <a href="/">Explore all Properties<img className='ml-2' src="https://img.icons8.com/material-outlined/20/22C3E6/right.png" alt='aa'/></a>
                    </div>
                </div> 
                <div className='row'>
                {carddata!==undefined&&carddata!==null&&carddata!==""?carddata.map((data)=>(
                    <div className='col-lg-3 col-md-6 col-12 p-2'>
                        <div className='property_card'>
                            <div className='image_section'>
                                <img src={data.img} alt="aa" />
                                <div className='product-card-heart-hover'>
                                    <img src="https://img.icons8.com/material-outlined/25/1A1A1A/like--v1.png" alt='aa'/>
                                </div>
                            </div>
                            <div className='detail_section'>
                                <div className='d-flex align-items-center'>
                                    <span>{data.feature}</span>
                                </div>
                                <h3>${data.price}</h3>
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
        </div>

        <div className='home_blog_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 home_about_section_left_section'>
                        <p>Blogs</p>
                        <h1>Articles Related to<br></br>Aesthetic Home Design</h1>
                    </div> 
                    <div className='col-lg-5 home_about_section_right_section py-5 d-flex align-items-center justify-content-end'>
                        <a href="/">Explore all Blogs<img className='ml-2' src="https://img.icons8.com/material-outlined/20/22C3E6/right.png" alt='aa'/></a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-12 blog-left'>
                        <div className="blog_images">
                            <img src={Interior} alt="aa" />
                        </div>
                        <div className='blog_images_detail py-3'>
                            <span>Augest 20,2022</span>
                            <h3 className='mt-3'>You'll save time and money on trial-and-error decorating</h3>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien,</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex align-items-center'>
                            <div className="blog_images-hor">
                                <img src={Interior} alt="aa" />
                            </div>
                            <div className='blog_images_detail py-3 px-2'>
                                <span>Augest 20,2022</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien,</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex align-items-center'>
                            <div className="blog_images-hor">
                                <img src={Interior} alt="aa" />
                            </div>
                            <div className='blog_images_detail py-3 px-2'>
                                <span>Augest 20,2022</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien,</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex align-items-center'>
                            <div className="blog_images-hor">
                                <img src={Interior} alt="aa" />
                            </div>
                            <div className='blog_images_detail py-3 px-2'>
                                <span>Augest 20,2022</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet egestas quam, at vehicula quam. Aenean nec lacus nec velit maximus lobortis eu et velit. Sed est sapien,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='home_banner_ad_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 home_about_section_left_section'>
                        <h1>Articles Related to<br></br>Aesthetic Home Design</h1>
                        <button>Fond Now</button>
                    </div> 
                    <div className='col-lg-5 home_about_section_right_section py-5 d-flex align-items-center justify-content-end'>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
    )
    };

export default SamplePage;






















































































































//   <div className='container-fluid hopoo'>
//             <div className='hjuios'><h1>Services</h1> </div>
//             <div className='row marginz'>
//                 <div className='col-md-2 col-lg-2 recfio'>
//                     <IconAnchorOff className='hjui' />
//                     <h3>Availability</h3>
//                     <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
//                 </div>
//                 <div className='col-md-2 col-lg-2 recfio'>
//                     <IconArticle className='hjui' />
//                     <h3>Articles</h3>
//                     <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
//                 </div>
//                 <div className='col-md-2 col-lg-2 recfio'>
//                     <IconCloudComputing className='hjui' />
//                     <h3>Record</h3>
//                     <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
//                 </div>
//                 <div className='col-md-2 col-lg-2 recfio'>
//                     <IconBuildingCommunity className='hjui' />
//                     <h3>Community</h3>
//                     <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
//                 </div>
//             </div>
//         </div>

//         <div className='container-fluid'>
//             <div className='row'>
//                 <div className='col fjuity'>
//                     <div className='ghyui'><p>Discuss your project, estate and our agents contact you immediately.</p>
//                     </div>

//                 </div>
//             </div>
//         </div>

//         <div className='container-fluid hjuio'>
//             <div className='hjuio'><h1>Properties</h1></div>
//             <div className='row marginz'>
//                 {property.map((items, index) => {
//                     return (
//                         <Card key={index} className='cardz' style={{ width: '36rem' }}>
//                             <Card.Img variant="top" src={items.image} />
//                             <Card.Body>
//                                 <Card.Title>{items.title}</Card.Title>
//                                 <Card.Text>
//                                     {items.description}
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     )
//                 })}

//             </div>
//         </div>

//         <div className='container-fluid'>
//             <div className='row'>
//                 <div className='col'>
//                     <iframe width="100%" height="615" src="https://www.youtube.com/embed/ZL2hc_hwTpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//                 </div>
//             </div>
//         </div>

//         <div className='container-fluid sitop'>
//             <div className='foreciio'><h1>Working Tree</h1></div>
//             <div className='row marginz'>
//                 <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
//                     <Typography variant="body2">
//                         Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
//                         ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
//                         reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
//                         qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
//                         Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
//                     </Typography>
//                     <Button onClick>dashboard</Button>
//                 </MainCard>
//                 <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
//                     <Typography variant="body2">
//                         Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
//                         ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
//                         reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
//                         qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
//                         Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
//                     </Typography>
//                     <Button onClick>dashboard</Button>
//                 </MainCard>
//                 <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
//                     <Typography variant="body2">
//                         Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
//                         ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
//                         reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
//                         qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
//                         Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
//                     </Typography>
//                     <Button onClick>dashboard</Button>
//                 </MainCard>
//             </div>
//         </div>

// <div>
//             <Footer />
//         </div>