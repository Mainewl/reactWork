import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        name: 'Jamal Female',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias esse! Corrupti maiores excepturi atque doloribus temporibus voluptas facere, unde a perspiciatis blanditiis neque, autem, nobis odio quidem? Sit, facilis?'
    },
    
    {
        avatar: AVTR2,
        name: 'Lurem Pseudonimo',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias esse! Corrupti maiores excepturi atque doloribus temporibus voluptas facere, unde a perspiciatis blanditiis neque, autem, nobis odio quidem? Sit, facilis?'
    },
    
    {
        avatar: AVTR3,
        name: 'Fabriticio Paratzo',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias esse! Corrupti maiores excepturi atque doloribus temporibus voluptas facere, unde a perspiciatis blanditiis neque, autem, nobis odio quidem? Sit, facilis?'
    },
    
    // {
    //     avatar: AVTR4,
    //     name: 'Abdu Female',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias esse! Corrupti maiores excepturi atque doloribus temporibus voluptas facere, unde a perspiciatis blanditiis neque, autem, nobis odio quidem? Sit, facilis?'
    // }
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                {
                data.map(({avatar, name, review}, index) => {
                    return(
                        <article key={index} className='testimonials'>
                            <div className='client__avatar'>
                                <img src={avatar}/>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )   
    }

export default Testimonials
