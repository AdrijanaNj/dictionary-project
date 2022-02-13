import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Adrijana's Dictionary</header>
        <main>
          <Dictionary defaultKeyword="fire" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by <span>Adrijana Njezic</span> and is{" "}
            <a
              href="https://github.com/AdrijanaNj/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://boring-hoover-76b98f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
