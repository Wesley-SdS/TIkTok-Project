import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="videofooter">
      <div className="videofooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videofooter__music">
          <MusicNoteIcon className="videofooter__icon" />
          
          <div className="videoMusicFooter__text">
          
            <p>{music}</p>
          </div>
          
        </div>
      </div>
      
      <img
        className="videofooter__record"
        alt="Imagem de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      ></img>
    </div>
  );
}

export default VideoFooter;
