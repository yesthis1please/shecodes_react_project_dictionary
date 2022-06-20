import React, { useState } from "react";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");



  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
      setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocu={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
