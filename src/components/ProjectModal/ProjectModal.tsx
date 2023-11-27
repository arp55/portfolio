import React from "react";

type Project = {
  id: number;
  image: any;
  name: string;
  description: Array<string>;
  techStack: Array<string>;
};

type Props = {
  divRef: React.RefObject<any>;
  dimension: {
    top: number;
    left: number;
    height: number;
    width: number;
  };
  closeModal: () => void;
  closeRef1: React.RefObject<any>;
  closeRef2: React.RefObject<any>;
  projects: Array<Project>;
  selIndex: number;
};

export default function ProjectModal({
  closeModal,
  closeRef1,
  closeRef2,
  dimension,
  divRef,
  projects,
  selIndex,
}: Props) {
  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        top: dimension.top,
        left: dimension.left,
        height: dimension.height,
        width: dimension.width,
        zIndex: 9999,
        opacity: 0.4,
        backgroundColor: "#4a4a4a",
        transition: "all .3s ease",
        display: "flex",
      }}
    >
      <button onClick={closeModal}>
        <span ref={closeRef1} className="close-btn1"></span>
        <span ref={closeRef2} className="close-btn2"></span>
      </button>
      <div className="box1">
        <img className="modal-img" src={projects[selIndex].image} />
      </div>
      <div className="modal-stack">
        {projects[selIndex].techStack.map((tech, ind) => {
          return <p className="tech-name">{tech}</p>;
        })}
      </div>
    </div>
  );
}
