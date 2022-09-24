import React from 'react'
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer';
import styles from './contact.css';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, } from '@tabler/icons';



export default function index() {
    return (
        <>
            <Header />

            <div className='container-fluid jsflnk'>
                <div className='row'>
                    <div className='col'>
                        <p className='texy'>CONTACT</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row form'>
                    <div className="col-lg-5  formcol">
                        <p className='sdifj'>Start a new project?</p>
                        <span className="mt-5">
                            <p className='sdifj'>Visit our studio at </p>
                            <p>2005 stakes Lise Apt.654 Vacaville 10010,USA</p>
                        </span>
                        <span className='sec2'>
                            <p className='sdifj'>Massage Us </p>
                            <p>info@yourdomain.com <br />
                                (+168)231544343
                            </p>
                        </span>
                        <span className='sec3'>
                            <IconBrandInstagram className='icon' />
                            <IconBrandTwitter className='icon' />
                            <IconBrandFacebook className='icon' />
                        </span>
                    </div>
                    <div className='col-lg-5 formcoll'>
                        <p className='lsdfkf'>Contact Us</p>
                        <div className='formdev'>
                            <div className='form-group m-3 ' >
                                <h4>Name</h4>
                                <input type="text" className='form-control' placeholder='Name' />
                            </div>
                            <div className='form-group m-3' >
                                <h4>Email</h4>
                                <input type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className='form-group m-3'>
                                <h4>Phone</h4>
                                <input type="text" className='form-control' placeholder='Phone' />
                            </div>
                            <div className='form-group m-3'>
                                <h4>Discription</h4>
                                <textarea type="text" className='form-control texterea' placeholder='Discription' />
                            </div>
                            <div className='form-group m-3 condition'>
                                <input type="checkbox" name="" id="" />
                                <span className='term'>i agree this term & conditions</span>
                            </div>
                            <button className='buttonSubmit '>Submit</button>

                        </div>
                        <img src="" alt="" />

                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}