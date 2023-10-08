import React, { useLayoutEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import AnimatedDiv from "../common/AnimatedDiv";
import "./Landing.scss";

type Props = {
  navigate: NavigateFunction;
};

export default function Landing({ navigate }: Props) {
  const introRef: any = React.createRef();
  const nameRef: any = React.createRef();
  const nameRef1: any = React.createRef();
  const nameRef2: any = React.createRef();
  const lineRef: any = React.createRef();
  const lineRef1: any = React.createRef();
  const btnRef: any = React.createRef();

  const handleClick = () => {
    // const div = introRef.current;
    // div.classList.toggle("intro-flip");
    // setTimeout(() => {
      navigate("/portfolio");
    // }, 1500);
  };

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
  }, [lineRef, btnRef]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const line = lineRef1.current;
      const classArr = [...line.classList];
      if (!classArr.includes("cover")) {
        line.classList.toggle("cover");
      }
    }, 500);
  }, [lineRef1]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const nameH1 = nameRef.current;
      const classArr = [...nameH1.classList];
      if (!classArr.includes("show-name")) {
        nameH1.classList.toggle("show-name");
      }
    }, 1000);
  }, [nameRef]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const nameH2 = nameRef1.current;
      const classArr = [...nameH2.classList];
      if (!classArr.includes("show-name")) {
        nameH2.classList.toggle("show-name");
      }
    }, 1300);
  }, [nameRef1]);

  useLayoutEffect(() => {
    setTimeout(() => {
      const nameH2 = nameRef2.current;
      const classArr = [...nameH2.classList];
      if (!classArr.includes("show-name")) {
        nameH2.classList.toggle("show-name");
      }
    }, 1600);
  }, [nameRef2]);

  return (
    <AnimatedDiv initial={{x:"-100%",transition:{duration:.4,ease:"linear"}}} animate={{x:"0%",transition:{duration:.4,ease:"linear"}}} exit={{x:"-100%",transition:{duration:.4,ease:"linear"}}} className="container">
        <div className="intro-back"></div>
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
            <button className="down-btn" onClick={handleClick}>
              <div className="btn-topline" />
              <h1 className="btn-text">
                <span className="port-text">portfolio</span>
              </h1>
              <div className="btn-bottomline" />
            </button>
          </div>
        </div>
    </AnimatedDiv>
  );
}
