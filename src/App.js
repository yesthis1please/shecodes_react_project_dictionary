import Dictionary from "./Dictionary";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main className="App-main">
        <Dictionary defaultWord="hello" />
      </main>

      <footer className="App-footer">
        This Dictionary App was coded by{" "}
        <a
          href="https://www.linkedin.com/in/annamaria-bara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Annamaria Bara
        </a>{" "}
        and is open sourced on{" "}
        <a
          href="https://github.com/yesthis1please"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        Icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
      </footer>
    </div>
  );
}
