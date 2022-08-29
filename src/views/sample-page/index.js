// material-ui
import { Typography } from '@mui/material';
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer'
import styles from './stylez.css';

import { IconBrandFacebook, IconBrandSkype, IconBrandInstagram, IconBrandLinkedin, IconAnchorOff, IconCloudComputing, IconArticle, IconBuildingCommunity } from '@tabler/icons';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// project imports
import MainCard from 'ui-component/cards/MainCard';

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

const SamplePage = () => (
    <>
        <div>
            <Header />
        </div>


        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => {
                    return (
                        <div className="each-slide" key={index}>
                            <div className='aligz'>
                            <div className='imsilid'><p>{slideImage.heading}</p></div>
                            <div className='imsilidzz'><p>{slideImage.caption}</p></div>
                            <button className='custom-btn btn-7 btyzxd'>Avail Now</button>
                                <img className='sizeop' src={slideImage.url} alt="rrr" />
                                <span className='cptio'>{slideImage.caption}</span>
                            </div>
                        </div>
                    )
                })}
            </Slide>
        </div>

        <div className='container-fluid hopoo'>
            <div className='hjuios'><h1>Services</h1> </div>
            <div className='row marginz'>
                <div className='col-md-2 col-lg-2 recfio'>
                    <IconAnchorOff className='hjui' />
                    <h3>Avability</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
                </div>
                <div className='col-md-2 col-lg-2 recfio'>
                    <IconArticle className='hjui' />
                    <h3>Articles</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
                </div>
                <div className='col-md-2 col-lg-2 recfio'>
                    <IconCloudComputing className='hjui' />
                    <h3>Record</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
                </div>
                <div className='col-md-2 col-lg-2 recfio'>
                    <IconBuildingCommunity className='hjui' />
                    <h3>Community</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nesciunt doloribus saepe sunt id quisquam fugiat maiores maxime in delectus sit, praesentium veniam iste fugit aperiam numquam asperiores dolor accusamus!</p>
                </div>
            </div>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col fjuity'>
                    <div className='ghyui'><p>Discuss your project, estate and our agents contact you immediately.</p>
                    </div>

                </div>
            </div>
        </div>

        <div className='container-fluid hjuio'>
            <div className='hjuio'><h1>Properties</h1></div>
            <div className='row marginz'>
                {property.map((items, index) => {
                    return (
                        <Card className='cardz' style={{ width: '36rem' }}>
                            <Card.Img variant="top" src={items.image} />
                            <Card.Body>
                                <Card.Title>{items.title}</Card.Title>
                                <Card.Text>
                                    {items.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <iframe width="100%" height="615" src="https://www.youtube.com/embed/ZL2hc_hwTpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>
        </div>

        <div className='container-fluid sitop'>
            <div className='foreciio'><h1>Working Tree</h1></div>
            <div className='row marginz'>
                <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                        ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                        qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                        Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
                    </Typography>
                    <Button onClick>dashboard</Button>
                </MainCard>
                <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                        ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                        qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                        Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
                    </Typography>
                    <Button onClick>dashboard</Button>
                </MainCard>
                <MainCard className='ziop' style={{ width: '35rem' }} title="Home">
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                        ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                        qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                        Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
                    </Typography>
                    <Button onClick>dashboard</Button>
                </MainCard>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </>

);

export default SamplePage;
