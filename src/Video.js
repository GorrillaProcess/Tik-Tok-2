import React, { useRef,useState } from "react";
import './Video.css';

function Video(){
const[play,setPlay]= useState(false);
const videoRef = useRef(null);
const onVideoPress = () =>
{
  if(play){
    videoRef.current.pause();
    setPlay(false);
    }
  else{
  videoRef.current.play();
  setPlay(true);
  }
  
};


return(
<div className="video">
<video className="video_player" loop controls onClick={onVideoPress}ref={videoRef}src="https://www.tiktok.com/@suzieandreni/video/6927607282842848518">
</video>
</div>
);
}

export default Video;