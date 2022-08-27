// material-ui
import { Typography } from '@mui/material';
import Header from '../webincludes/Header';
import styles from './stylez.css';



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
        caption: 'Slide 1'
    },
    {
        url: 'http://www.whatsoninthessaloniki.com/wp-content/uploads/2017/05/properties2.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://cdn.houseplansservices.com/content/1crartf4esqstardciellil6mh/w991x660.jpg?v=9',
        caption: 'Slide 3'
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
                                <img className='sizeop' src={slideImage.url} alt="rrr" />
                                <span className='cptio'>{slideImage.caption}</span>
                            </div>
                        </div>
                    )
                })}
            </Slide>
        </div>

        <div className='container-fluid marginz'>
            <h1>Services</h1>
            <div className='row hjuio'>
                <div className='col-md-2 col-lg-2 recfio'>
                    <p> Alpha</p>
                </div>
                <div className='col-md-2 col-lg-3 recfio'>
                    <p> Alpha</p>
                </div>
                <div className='col-md-2 col-lg-3 recfio'>
                    <p> Alpha</p>
                </div>
                <div className='col-md-2 col-lg-2 recfio'>
                    <p> Alpha</p>
                </div>
            </div>
        </div>

        <div className='container-fluid marginz'>
            <div className='row'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

        <MainCard style={{ width: '18rem' }} title="Home">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
            </Typography>
            <button onClick>dashboard</button>
        </MainCard>
        <MainCard style={{ width: '18rem' }} title="Home">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
            </Typography>
            <button onClick>dashboard</button>
        </MainCard>
        <MainCard style={{ width: '18rem' }} title="Home">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                qui officiate descent molls anim id est labours. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, inventore laboriosam.
                Perferendis ullam ex ratione error? Laborum laudantium odio aut perspiciatis asperiores recusandae rerum. Consequatur hic sunt quas architecto ad?
            </Typography>
            <button onClick>dashboard</button>
        </MainCard>
    </>
);

export default SamplePage;
