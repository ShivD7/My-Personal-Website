import React from 'react'
import developer from '../website_videomp4.mp4'
import Typewritereffect from "./Typewritereffect";
import Card from './Card.js';
import TicTacToe from '../Screenshot (1).png';
import Pong from '../Screenshot (4).png';
import Flappy from '../Screenshot (8).png';
import LightSpeed from 'react-reveal/LightSpeed';
import Navbar from './Navbar';
import './Main.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CCVI from '../ccvi.png';
import Rickson from '../logo.png';
import School from './School';
import Footer from './Footer.js';
import './Video.css'
import {FaMedal} from 'react-icons/fa';
import {FaSchool} from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa';
import {FaRunning} from 'react-icons/fa';

const Main = () => {
  return (
    <div className="w-100 vh-100">
      <Navbar />
        <div className="overlay" ></div>
        <video id='start' src={developer} autoPlay loop muted className = "video"/>
        <Typewritereffect />
        <LightSpeed left>
          <div className="p-5 margin-5">
            <p className='fs-2 pt-2' id='about-me'>
              <strong>Hey there! 👋</strong>
            </p>
            <p className='fs-4'>
              Here's a bit about me:
            </p>
            <p>
              I am currently a high-school student attending Centennial C.V.I in Guelph, Ontario. I like to develop games, apps, websites, and many other projects that can prove useful to everyone! My favourite sports include tennis, basketball, soccer, and badminton. In my spare time, I enjoy reading, as well as spending time with my friends. I hope to have a successful career in the IT world!
            </p> 
          </div>
          <h2 className="p-1 margin-5 d-flex justify-content-center" id='my-projects'>Check out my projects!</h2>
          <div className='allcards'>
            <Card className='card1'
            title='TicTacToe'
            imageUrl={TicTacToe}
            body='This was my first project, created during the winter break of my 9th grade.'
            givenUrl='https://youtube.com/shorts/aHI1aj5ljo0'
            />
            <Card className='card2'
            title='Pong'
            imageUrl={Flappy}
            body='Pong is my second project, that I created, during my free time, over the span of a couple weeks'
            givenUrl='https://www.youtube.com/watch?v=VNzaQsEqIb8'
            />
            <Card className='card3'
            title='Flappy Joyride'
            imageUrl={Pong}
            body='My third project was developed as a final project for my ICS2O class that I had taken.'
            givenUrl='https://youtu.be/_ZulQQ7BgQ0/'
          
            />
          </div>
          <div className="p-5 margin-5">
            <h2 id='extracurriculars'>Extra</h2>
          </div>
          </LightSpeed>
          <div>
            <VerticalTimeline
            lineColor={ "black" } >
              <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                contentStyle={{ background: 'rgb(27, 156, 252)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                date="Oct. 20, 2023"
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                icon={<FaMedal />}
              >
                <h3 className="vertical-timeline-element-title">D10 Tennis Champion</h3>
                <h4 className="vertical-timeline-element-subtitle">Guelph, ON</h4>
                <p>
                  Winning the District 10 Tennis tournament had built my confidence in the sport. Though I was unable to go to CWOSSA, I hope to win that tournament aswell in 10th grade.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                contentStyle={{ background: 'rgb(27, 156, 252)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                date="2023 - present"
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                icon={<FaSchool/>}
              >
                <h3 className="vertical-timeline-element-title">Link Crew</h3>
                <h4 className="vertical-timeline-element-subtitle">Guelph, ON</h4>
                <p>
                  Joining my school's link crew has improve my creative direction, project management, and leadership skills.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                contentStyle={{ background: 'rgb(27, 156, 252)', color: '#000' }}
                date="2023 - present"
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                icon={<FaSchool />}
              >
                <h3 className="vertical-timeline-element-title">CS Club</h3>
                <h4 className="vertical-timeline-element-subtitle">Guelph, ON</h4>
                <p>
                  After learning about my school's CS Club, I made sure to join it to gain knowledge from other, more experienced people.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                contentStyle={{ background: 'rgb(27, 156, 252)', color: '#000' }}
                date="Mar. 26, 2023"
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                icon={<FaRunning/>}
              >
                <h3 className="vertical-timeline-element-title">Soccer Team</h3>
                <h4 className="vertical-timeline-element-subtitle">Guelph, ON</h4>
                <p>
                  Trying out, and making, my school's soccer team improved my social skills by introducing me to new people as well as increased my love for the sport.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--education'
                contentStyle={{ background: 'rgb(27, 156, 252)', color: '#000' }}
                date="Jul. 5, 2023 - present"
                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                icon={<FaBriefcase />}
              >
                <h3 className="vertical-timeline-element-title">First Job Experience</h3>
                <h4 className="vertical-timeline-element-subtitle">Guelph, ON</h4>
                <p>
                  Got my first job at Circle K. This is my first breakthrough into the real world. It has taught me the hard-work required to sustain a proper life, how to be greatfull, and good social skills. 
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
          <LightSpeed left>
          <div className="p-5 margin-5">
            <h2 id='education'>
              Education
            </h2>
            <School 
              imageUrl={Rickson}
              body="Rickson Ridge Public School was the elementary school I attended during my pre-teenage years. The school provided a safe environment with amazing teachers and opportunities and I ended 8th grade with a 90% average, as well as many accomplishments in the sports teams. This school helped build my character and skills."
              />
            <School 
              imageUrl={CCVI}
              body="As student currently in 9th grade, I am working towards completing my high-school education and gaining my OSSD diploma. I hope to take part in as many AP classes as my school offers to challenge myself and gain a deeper understanding of a variety topics. As far as university goes, I hope to attend the University of Waterloo to persue a Bachelors of Computer Science (Co-op)."
              />
          </div> 
          </LightSpeed>
          <Footer />
          
    </div>
  )
}



export default Main;