import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X"></Player>
           <Player initialName="Player2" symbol="O"></Player>

         </ol>
      </div>
    </main>
  )
}

export default App
