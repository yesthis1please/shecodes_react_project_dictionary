import React from "react";
import "./Meaning.css";

export default function Meaning(props) {

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <ul>
                <li>
                  {definition.definition}
                  <br />
                  Example: <em>{definition.example}</em>
                </li>
              </ul>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <ul>
                <li>{definition.definition}</li>
              </ul>
            </div>
          );
        }
      })}
      <div className="Synonyms">
        {props.meaning.synonyms.map(function(synonym, index){
          return(
            <ul className="Synonyms-list" key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}

      </div>
    </div>
  );
}
