import React from "react";

// const ProjectCard = ({ title, image, info }) => {
//     return (
//       <div>
//         <article className="card">
//           <img className="image" src={image} alt="" />
//           <h4 className="title">{title}</h4>
//           <p className="info">{info}</p>
//         </article>
//       </div>
//     );
//   };
//   export default ProjectCard

const ProjectCard = ({ img, gif,title }) => {
  if (img && gif) {
    return (
      <div
        className="card"
        onClick={(e) => (window.location.href = "https://openprocessing.org/sketch/1139147")}
      >
        <h4 className="title">{title}</h4>
        <div class="figure">
          <img class="image-main" src={img} alt="a star img"></img>
          <img class="image-hover" src={gif} alt="a star gif"></img>
        </div>
      </div>
    );
  } else {
    return <div className="dummycard"></div>;
  }
};
export default ProjectCard;

// const Card = ({ title, image, info }) => {
//     return (
//       // <article className="card">
//       //   <img className="image" src={image} alt="" />
//       //   <h4 className="title">{title}</h4>
//       //   <p className="info">{info}</p>
//       // </article>
//       <iframe
//         title="vimeo-player"
//         src="https://player.vimeo.com/video/506088799"
//         // width="640"
//         // height="360"
//         frameborder="0"
//         allowfullscreen
//       ></iframe>
//     );
//   };
