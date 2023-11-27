import React,{useRef,useLayoutEffect} from 'react'
import './About.scss'
import { NavigateFunction } from 'react-router-dom';
import { aboutData, socials } from '../../utils/aboutData';
import AnimatedDiv from '../common/AnimatedDiv';

type Props = {
    navigate: NavigateFunction;
  };

export default function About({navigate}:Props) {
    const btnRef=useRef(null)
    
  const handleClick = () => {
    navigate("/");
  };
  
  useLayoutEffect(() => {
    setTimeout(() => {
      const btn :any= btnRef.current;
      const classArr = [...btn.classList];
      if (!classArr.includes("slide")) {
        btn.classList.toggle("slide");
      }
    }, 500);
  }, [btnRef]);

  return (
    <AnimatedDiv className="about-container"
    initial={{ y: "100%", transition: { duration: 0.4, ease: "linear" } }}
    animate={{
      y: "0%",
      transition: { duration: 0.4, ease: "linear", delay: 0 },
    }}
    exit={{ y: "100%", transition: { duration: 0.4, ease: "linear" } }}>
        <div ref={btnRef} className="btn-container">
        <button className="down-btn" onClick={handleClick}>
            <div className="btn-topline" />
            <h1 className="btn-text">
            <span className="port-text">home</span>
            </h1>
            <div className="btn-bottomline" />
        </button>
        </div>
        <div className='about-box'>
            <p className='about-header'>About</p>
            <p className='about-data'>{aboutData}</p>
            <p className="connect-text">Connect with me on</p>
            {socials.map((social:any)=>(
                <a href={social.url} target='blank'>
                <img src={`/assets/icons/${social.name}.png`} alt={social.name} className='social-img' />
                </a>
            ))}
        </div>
    </AnimatedDiv>
  )
}
