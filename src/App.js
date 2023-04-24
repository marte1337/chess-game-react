import "./App.css";
import PlayAdvancedMoveEngine from "./components/PlayAdvancedMoveEngine";

import PlayRandomMoveEngine from "./components/PlayRandomMoveEngine";

function App() {
  return (
    <>
      <div className="app">
        <PlayRandomMoveEngine />
      </div>
      <div className="app">
        <PlayAdvancedMoveEngine />
      </div>
    </>
  );
}

export default App;
