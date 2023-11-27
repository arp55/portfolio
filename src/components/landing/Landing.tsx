import React, { useLayoutEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import AnimatedDiv from "../common/AnimatedDiv";
import "./Landing.scss";

type Props = {
  navigate: NavigateFunction;
};

const aboutExit = { y: "-100%", transition: { duration: 0.4, ease: "linear" } };
const portfolioExit = {
  x: "-100%",
  transition: { duration: 0.4, ease: "linear" },
};

export default function Landing({ navigate }: Props) {
  const introRef: any = React.createRef();
  const nameRef: any = React.createRef();
  const nameRef1: any = React.createRef();
  const nameRef2: any = React.createRef();
  const lineRef: any = React.createRef();
  const lineRef1: any = React.createRef();
  const btnRef: any = React.createRef();
  const btnRef1: any = React.createRef();

  //for switching navigation animation
  const [exitAnimation, setExitAnimation] = useState<any>(aboutExit);

  const handleClick = (route: string) => () => {
    // const div = introRef.current;
    // div.classList.toggle("intro-flip");
    // setTimeout(() => {
    // }, 1500);
    if (route === "web-portfolio") {
      setExitAnimation(portfolioExit);
    } else if (route === "about") {
      setExitAnimation(aboutExit);
    }
    navigate(route);
  };

  useLayoutEffect(() => {
    const line = lineRef.current;
    const btn = btnRef.current;
    const btn1 = btnRef1.current;
    if (line) {
      setTimeout(() => {
        const classArr = [...line.classList];
        if (!classArr.includes("cover")) {
          line.classList.toggle("cover");
        }
      }, 500);
    }
    if (btn || btn1) {
      setTimeout(() => {
        const classArr = [...btn.classList];
        if (!classArr.includes("slide")) {
          btn.classList.toggle("slide");
          btn1.classList.toggle("slide");
        }
      }, 500);
    }
  }, [lineRef, btnRef, btnRef1]);

  useLayoutEffect(() => {
    const line = lineRef1.current;

    if (line)
      setTimeout(() => {
        const classArr = [...line.classList];
        if (!classArr.includes("cover")) {
          line.classList.toggle("cover");
        }
      }, 500);
  }, [lineRef1]);

  useLayoutEffect(() => {
    const nameH1 = nameRef.current;
    if (nameH1)
      setTimeout(() => {
        const classArr = [...nameH1.classList];
        if (!classArr.includes("show-name")) {
          nameH1.classList.toggle("show-name");
        }
      }, 1000);
  }, [nameRef]);

  useLayoutEffect(() => {
    const nameH2 = nameRef1.current;
    if (nameH2)
      setTimeout(() => {
        const classArr = [...nameH2.classList];
        if (!classArr.includes("show-name")) {
          nameH2.classList.toggle("show-name");
        }
      }, 1300);
  }, [nameRef1]);

  useLayoutEffect(() => {
    const nameH3 = nameRef2.current;
    if (nameH3)
      setTimeout(() => {
        const classArr = [...nameH3.classList];
        if (!classArr.includes("show-name")) {
          nameH3.classList.toggle("show-name");
        }
      }, 1600);
  }, [nameRef2]);

  return (
    <AnimatedDiv
      initial={{ x: "-100%", transition: { duration: 0.4, ease: "linear" } }}
      animate={{ x: "0%", transition: { duration: 0.4, ease: "linear" } }}
      exit={exitAnimation}
      className="landing-container"
    >
      {/* <div className="intro-back"></div> */}
      <div ref={introRef} className="intro-front">
        <div ref={lineRef} className="line-top" />
        <div ref={lineRef1} className="line-down" />
        <div className="intro-text">
          <h1 className="name-text">
            <span ref={nameRef} className="name">
              Hello,{" "}
            </span>
          </h1>
          <h1 className="name-text" style={{}}>
            <span ref={nameRef1} className="name">
              I am
            </span>
          </h1>
          <h1 className="name-text">
            <span ref={nameRef2} className="name">
              Adithya
            </span>
          </h1>
        </div>
        <div ref={btnRef} className="btn-container">
          <button className="down-btn" onClick={handleClick("web-portfolio")}>
            <div className="btn-topline" />
            <h1 className="btn-text">
              <span className="port-text">portfolio</span>
            </h1>
            <div className="btn-bottomline" />
          </button>
        </div>
        <div ref={btnRef1} className="btn-container about-me">
          <button className="down-btn" onClick={handleClick("about")}>
            <div className="btn-topline" />
            <h1 className="btn-text">
              <span className="port-text">about</span>
            </h1>
            <div className="btn-bottomline" />
          </button>
        </div>
      </div>
    </AnimatedDiv>
  );
}
