import { useState }  from 'react';
import './Navbar.css'; // Import the custom CSS file
import {Link} from 'react-scroll'
import Hamburger from "./Hamburger";

const Navbar = () => {

  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
  }

  


  return (
    <header>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-item'>
            <Link  onClick={toggleHamburger} to='about-me' spy={true} smooth={true} offset={-150} duration={1000} className='p-about'>
              About
            </Link>
          </div>
          <div className='nav-item'>
            <Link onClick={toggleHamburger} to='my-projects' spy={true} smooth={true} offset={-150} duration={1000} className='p-projects'>
              Projects
            </Link>
          </div>
          <div className='my-name'>
            <Link onClick={toggleHamburger} to='start' spy={true} smooth={true} duration={1000} className='p-my-name'>Shiv Desai</Link>
          </div>
          <div className='nav-item'>
            <Link onClick={toggleHamburger} to='extracurriculars' spy={true} smooth={true} offset={-150} duration={1000} className="p-extracurriculars">
                Extra
            </Link>
          </div>
          <div className='nav-item'>
            <Link  onClick={toggleHamburger} to='education' spy={true} smooth={true} offset={-150} duration={1000} className="p-education">
                Education
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
        </div>
      </nav>
      <style jsx>{`
    
                @media (max-width: 767px){
                    .navbar{
                      display: flex;
                      justify-content: center;
                      background-color: rgb(0, 0, 0);
                      width: 100%;
                    
                      }
                    
                    header{
                      position: fixed;
                      width: 100%;
                      top: 0;
                      left: 0;
                      vertical-align: top;
                      z-index:500;
                    }

                    .hamburger{
                      top: 25%;
                      display:flex;
                    }
                    .nav-container{      
                      display: ${hamburgerOpen ? 'inline' : 'none'};
                      position: fixed;
                      top: 50px;
                      flex-direction: column;
                      background-color: black;
                      width: 100%;
                      text-align: center;
                      transition: 0.3s;
                      color: white;
                      margin: 18px 0;
                    }

                    .nav-item{
                      margin: 60px 0;
                    }
               
                
            `}</style>
    </header>
  );
};

export default Navbar;