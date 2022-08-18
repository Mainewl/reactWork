import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Yers Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolder2Open className="about__icon"/>
                            <h5>Projects</h5>
                            <small>+15 Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aliquam nam sunt in cum quam tempore eius architecto quia quo deserunt nemo quos earum non repellat, laudantium pariatur autem illo!
                    </p>

                    <a href="#contact" className="btn btn-primary"> Let'sa Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
