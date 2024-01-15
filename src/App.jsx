import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Max" symbol="X" />
          <Player name="Player2" symbol="O" />
        </ol>
        <GameBoard></GameBoard>
      </div>
      LOG
    </main>
  );
}

export default App;
