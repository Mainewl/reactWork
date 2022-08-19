import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import  {FiTwitter} from 'react-icons/fi'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className="contact__option">
                        <MdOutlineMarkEmailUnread className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>Manonha.s2@Hotmail.com</h5>
                        <a href="mailto:manonha.s2@hotmail.com" target='_blank'>Send a Email</a>
                    </article>
                    <article className="contact__option">
                        <FiTwitter className='contact__option-icon'/>
                        <h4>Twitter</h4>
                        <h5>EmanoweL</h5>
                        <a href="https://twitter.com/EmanoweL_" target='_blank'>Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineMarkEmailUnread className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>(+55)48 99647471</h5>
                        <a href="https://api.whatsapp.com/send?phone996474771" target='_blank'>Send a Message</a>
                    </article>
                </div>
                {/* end of a part of contact options */}
                <form action="">
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
