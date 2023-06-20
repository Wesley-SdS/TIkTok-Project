import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import "./pages/video.css";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);
  async function getVideos() {
    const VideosCollection = collection(db, "videos");
    const VideosSnapshot = await getDocs(VideosCollection);
    const VideosList = VideosSnapshot.docs.map((doc) => doc.data());
    setVideos(VideosList);
  }

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
            
          );
        })}
      </div>
       <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
            
          );
        })}
      </div>
    </div>
  );
}

export default App;
