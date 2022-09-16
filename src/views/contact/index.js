import React from 'react'
import Header from '../webincludes/Header';
import Footer from '../webincludes/Footer';
import styles from './contact.css';

export default function index() {
    return (
        <div>
            <Header />

            <div className='container-fluid jsflnk'>
                <div className='row'>
                    <div className='col'>
                        <p className='texy'>CONTACT</p>

                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        
                            <form>
                                <label>Enter your name:
                                    <input type="text" />
                                </label>
                                <label>Enter your email:
                                    <input type="text" />
                                </label>
                                <label>Enter your contact:
                                    <input type="text" />
                                </label>
                                
                            </form>
                       
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        
    )
}
