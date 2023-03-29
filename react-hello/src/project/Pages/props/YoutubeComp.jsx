import React from "react";
import "./youtube.css"

// Menerima props
const YoutubeComp = (props) => {
  return(
      <div className="youtube-wrapper">
        <div className="thumbnail">
          <img className="img-thumbnail" src="https://placeimg.com/200/150/tech" alt="" />
          <p>{props.time}</p>
        </div>
        <p className="title-youtube">{props.title}</p>
        <p className="desc-youtube">{props.desc}</p>
      </div>
  )
}

YoutubeComp.defaultProps = {
  time: "0.00",
  title: "Title",
  desc: "description"
}

export default YoutubeComp
