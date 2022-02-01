import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <div className="app__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
            alt="ig"
          />
          <h1>Reels</h1>
        </div>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="arifulislamtoufiq"
          avatarSrc="https://www.instagram.com/p/BtF04fnBof1/"
          song="test songgnnnnnn: this is so, blind and so quick"
          url="https://www.instagram.com/p/CZH8cHhB_R9/"
          likes={500}
          shares={50}
        />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
