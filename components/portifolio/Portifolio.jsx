import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portifolio = () => {
    return (
        <section id='portifolio'>
            <h5>My Recent Works</h5>
            <h2>Portifolio</h2>

            <div className="container portifolio__container">
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG4} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG5} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
                <article className='portifolio__item'>
                    <div className="portifolio__item-image">
                        <img src={IMG6} alt=""/>
                    </div>
                    <h3>This a portifolio item titlte</h3>
                    <div className="portifolio__item-cta">
                        <a href="https://github.com/Mainewl" className='btn' target='_blank'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>                    
                </article>
            </div>
        </section>
    )
}

export default Portifolio
