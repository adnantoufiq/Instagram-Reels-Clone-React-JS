import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({ channel, avatarSrc, song, url, likes, shares }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop the video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // start
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        //useRef = pointing on this video on simpleaway
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="instagram reels video"
        typeof="video"
        controls
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
    </div>
  );
};

export default VideoCard;
