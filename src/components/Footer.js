import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import './Footer.css'


const Footer = () => {
  return (
    <footer style={styles.footer}>
    <div className='d-flex justify-content-center p-1 m-1'>
        <div className='d-flex flex-direction-row p-3' >
            <a href='https://github.com/ShivD7' className='text-white '>
                <FaGithub size={30} className='icons'/>
            </a>
        </div>
        <div className='d-flex flex-direction-row p-3'>
            <a href="mailto:shivdesai128@gmail.com?" className='text-white '> 
                <FaEnvelope size={30} className='icons'/>
            </a>
        </div>
        <div className='d-flex flex-direction-row p-3'>
            <a href='https://www.linkedin.com/in/shiv-desai-a0b5a7287/' className='text-white'>
                <FaLinkedin size={30} className='icons'/>
            </a>
        </div>
    </div>
      <p>&copy; {new Date().getFullYear()} Shiv Desai. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '0.3rem',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
