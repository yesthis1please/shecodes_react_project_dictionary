import React from "react";
import audio from "./images/audio.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <li className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={audio}
            className="Phonetic-audio-icon"
            alt="Phonetic audio icon"
          />
        </a>
        <span>{props.phonetic.text}</span>
      </li>
    );
  } else {
    return null;
  }
}
