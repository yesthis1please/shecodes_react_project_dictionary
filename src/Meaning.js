import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

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
    </div>
  );
}
