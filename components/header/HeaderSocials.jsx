import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import  {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target='_blank'> <BsLinkedin/> </a>
            <a href="https://github.com/Mainewl" target='_blank'> <BsGithub/> </a>
            <a href="https://medium.com/@Manewl" target='_blank'> <BsMedium/> </a>
        </div>
    )
}

export default HeaderSocials
