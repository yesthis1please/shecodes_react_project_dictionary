import React from "react";
import audio from "./images/audio.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    let audio = props.phonetic.audio;
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  if (props.phonetic.audio) {
    return (
      <li className="Phonetic">
        <img
          src={audio}
          className="Phonetic-audio-icon"
          alt="Phonetic audio icon"
          onClick={playAudio}
        />

        <span>{props.phonetic.text}</span>
      </li>
    );
  } else {
    return null;
  }
}
