import React, { useEffect, useLayoutEffect, useState } from "react";
import "./WebPortfolio.scss";
import { webSkills, projects } from "../../../utils/projectData";
import ProjectModal from "../../ProjectModal/ProjectModal";
import AnimatedDiv from "../../common/AnimatedDiv";
import { NavigateFunction } from "react-router-dom";

type Props = {
  navigate: NavigateFunction;
};

const introExit = { x: "100%", transition: { duration: 0.4, ease: "linear" } };
const portfolioExit = {
  x: "-100%",
  transition: { duration: 0.4, ease: "linear" },
};

const refs: any[] = projects.map(() => React.createRef());

export default function Portfolio({ navigate }: Props) {
  const closeRef1: React.RefObject<any> = React.createRef();
  const closeRef2: React.RefObject<any> = React.createRef();
  const btnRef: any = React.createRef();
  const btnRef1: any = React.createRef();

  //for switching navigation animation
  const [exitAnimation, setExitAnimation] = useState(introExit);

  const [clicked, setClicked] = useState(false);
  const [selIndex, setSelIndex] = useState<number>(-1);
  const [dimension, setDimension] = useState({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });
  const divRef: React.RefObject<any> = React.createRef();

  useLayoutEffect(() => {
    const btn = btnRef.current;
    const btn1 = btnRef1.current;
    if (btn) {
      setTimeout(() => {
        const classArr = [...btn.classList];
        if (!classArr.includes("slide")) {
          btn.classList.toggle("slide");
        }
      }, 500);
    }
    if (btn1) {
      setTimeout(() => {
        const classArr = [...btn1.classList];
        if (!classArr.includes("slide")) {
          btn1.classList.toggle("slide");
        }
      }, 500);
    }
  }, [btnRef, btnRef1]);

  async function openModal(index: number) {
    const pos = await refs[index].current.getBoundingClientRect();
    setSelIndex(index);
    console.log({ index });
    const { top, left, height, width } = pos;
    const obj = {
      top,
      left,
      height,
      width,
    };
    setDimension(obj);
    setClicked(true);
  }

  function closeModal() {
    if (clicked) {
      closeRef1.current.classList.toggle("close-rotate");
      closeRef2.current.classList.toggle("close-rotate");
      setTimeout(() => {
        const div = divRef.current;
        div.classList.toggle("open-modal");
      }, 20);

      setTimeout(() => {
        setSelIndex(-1);
        setClicked(false);
      }, 400);
    }
  }

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        const div = divRef.current;
        div.classList.toggle("open-modal");

        setTimeout(() => {
          closeRef1.current.classList.toggle("close-rotate");
          closeRef2.current.classList.toggle("close-rotate");
        }, 200);
      }, 70);
    }
  }, [divRef, clicked, closeRef1, closeRef2]);

  const handleClick = (route: string) => {
    if (route.length > 0) {
      setExitAnimation(portfolioExit);
    } else {
      setExitAnimation(introExit);
    }
    // setTimeout(()=>{})
    navigate(route);
  };

  return (
    <AnimatedDiv
      initial={{ x: "100%", transition: { duration: 0.4, ease: "linear" } }}
      animate={{
        x: "0%",
        transition: { duration: 0.4, ease: "linear", delay: 0 },
      }}
      exit={exitAnimation}
      className="webportfolio-container"
    >
      <div ref={btnRef} className="btn-container1">
        <button className="down-btn1" onClick={() => handleClick("")}>
          <div className="btn-topline1" />
          <h1 className="btn-text1">
            <span className="port-text1">intro</span>
          </h1>
          <div className="btn-bottomline1" />
        </button>
      </div>
      <div ref={btnRef1} className="btn-container2">
        <button
          className="down-btn2"
          onClick={() => handleClick("mobile-portfolio")}
        >
          <div className="btn-topline2" />
          <h1 className="btn-text2">
            <span className="port-text2">native</span>
          </h1>
          <div className="btn-bottomline2" />
        </button>
      </div>
      <div className="port-front">
        <div className="portfolio-card">
          <h1 className="header">Web Developer Portfolio</h1>
          <p className="sub-text">
            Check out few of the stuff I built to explore and improve my skills.
          </p>
          {/* <p className="sub-header">skills</p> */}
          <div className="skill-box">
            <div className="skill-container">
              {webSkills.map((item, index) => {
                return (
                  <div key={index} className="skill">
                    <p className="skill-name">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="project-grid">
            {projects.map((item, index) => {
              const { image, name, techStack, id } = item;
              return (
                <div key={id} ref={refs[index]} className="project-box">
                  {index !== selIndex && (
                    <>
                      <img className="project-img" src={image} alt={name} />
                      <div className="stack-container">
                        <div className="stack-box">
                          {techStack.map((tech, ind) => {
                            return (
                              <p key={ind} className="tech-name">
                                {tech}
                              </p>
                            );
                          })}
                          <div className="btn-container4">
                            <button
                              className="view-btn"
                              onClick={() => openModal(index)}
                            >
                              more
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {clicked && selIndex >= 0 && (
            <ProjectModal
              {...{
                closeModal,
                closeRef1,
                closeRef2,
                dimension,
                divRef,
                projects,
                selIndex,
              }}
            />
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
}
