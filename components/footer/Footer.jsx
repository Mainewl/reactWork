import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import  {FiTwitter} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'



const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>MANEL</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portifolio">Portifolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><AiOutlineWhatsApp/></a>
                <a href="https://twitter.com/EmanoweL_"><FiTwitter/></a>
                <a href=""><GrInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Manel KND. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
