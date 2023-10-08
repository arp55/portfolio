import React, { useEffect, useLayoutEffect, useState } from "react";
import "./WebPortfolio.scss";
import { skills, projects } from "../../utils/projectData";
import ProjectModal from "../ProjectModal/ProjectModal";
import AnimatedDiv from "../common/AnimatedDiv";
import { NavigateFunction } from "react-router-dom";

type Props={
  navigate:NavigateFunction;
}

export default function Portfolio({ navigate }: Props) {
  const lineRef: any = React.createRef();
  const lineRef1: any = React.createRef();
  const closeRef1: React.RefObject<any> = React.createRef();
  const closeRef2: React.RefObject<any> = React.createRef();
  const btnRef: any = React.createRef();
  const btnRef1: any = React.createRef();
  
  const [refs, setRefs] = useState<any>(projects.map(() => React.createRef()));
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
    setTimeout(() => {
      const line = lineRef.current;
      const classArr = [...line.classList];
      if (!classArr.includes("cover")) {
        line.classList.toggle("cover");
      }
    }, 500);

    setTimeout(() => {
      const line = lineRef1.current;
      const classArr = [...line.classList];
      if (!classArr.includes("cover")) {
        line.classList.toggle("cover");
      }
    }, 500);
  }, [lineRef, lineRef1]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const line = lineRef.current;
      const classArr = [...line.classList];
      if (!classArr.includes("cover")) {
        line.classList.toggle("cover");
      }
    }, 500);
    setTimeout(() => {
      const btn = btnRef.current;
      const classArr = [...btn.classList];
      if (!classArr.includes("slide")) {
        btn.classList.toggle("slide");
      }
    }, 500);
    setTimeout(() => {
      const btn = btnRef1.current;
      const classArr = [...btn.classList];
      if (!classArr.includes("slide")) {
        btn.classList.toggle("slide");
      }
    }, 500);
  }, [lineRef, btnRef1]);

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
        const line = lineRef.current;
        line.classList.toggle("no-show");
        const line1 = lineRef1.current;
        line1.classList.toggle("no-show");
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
        const line = lineRef.current;
        line.classList.toggle("no-show");
        const line1 = lineRef1.current;
        line1.classList.toggle("no-show");
        const div = divRef.current;
        div.classList.toggle("open-modal");

        setTimeout(() => {
          closeRef1.current.classList.toggle("close-rotate");
          closeRef2.current.classList.toggle("close-rotate");
        }, 200);
      }, 70);
    }
  }, [divRef]);

  const handleClick = () => {
      navigate("/");
  };

  return (
    <AnimatedDiv initial={{x:"100%",transition:{duration:.4,ease:"linear"}}} animate={{x:"0%",transition:{duration:.4,ease:"linear",delay:0}}} exit={{x:"100%",transition:{duration:.4,ease:"linear"}}} className="container">
        <div className="port-front">
          <div ref={lineRef} className="line-top" />
          <div ref={lineRef1} className="line-down" />
          <div className="portfolio-card">
            <div ref={btnRef} className="btn-container1">
              <button className="down-btn1" onClick={handleClick}>
                <div className="btn-topline1" />
                <h1 className="btn-text1">
                  <span className="port-text1">intro</span>
                </h1>
                <div className="btn-bottomline1" />
              </button>
            </div>
          <div ref={btnRef1} className="btn-container2">
            <button className="down-btn" onClick={handleClick}>
              <div className="btn-topline" />
              <h1 className="btn-text">
                <span className="port-text">about me</span>
              </h1>
              <div className="btn-bottomline" />
            </button>
          </div>
            <h1 className="header">Web Developer Portfolio</h1>
            <p className="sub-text">
              Check out few of the stuff I built to explore and improve my skills.
            </p>
            {/* <p className="sub-header">skills</p> */}
            <div className="skill-box">
              <div className="skill-container">
                {skills.map((item, index) => {
                  return (
                    <div className="skill">
                      <p className="skill-name">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="project-grid">
              {projects.map((item, index) => {
                const { image, name, techStack } = item;
                return (
                  <div ref={refs[index]} className="project-box">
                    {index !== selIndex && (
                      <>
                        <img className="project-img" src={image} />
                        <div className="stack-container">
                          <div className="stack-box">
                            {techStack.map((tech, ind) => {
                              return <p className="tech-name">{tech}</p>;
                            })}
                            <div className="btn-container1">
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
