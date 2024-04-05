import "./App.css";
import CompUser from "./components/user.js";
import {useState} from 'react';

function App() {

          
  const [player, setPlayers] = useState([])
  const [player1, setPlayer1] = useState({name: '', points: 0})
  const [player2, setPlayer2] = useState({name: '', points: 0})

  const [server, setServer] = useState(player)



  function startGame(Player1, Player2){
    points=0
    do{
    if (server == Player1){
      <input value={point}>How many points you do? </input>
        player1.points+=point
    } else {
      <input value={point}>How many points you do? </input>
        player2.points+=point
    }
    } while ((player1.points < 11 && (player2.points - player1.points) <=2)  || (player1.points < 11 && (player1.points - player2.points) <=2))
    
    if(player1.point>player2.points){
      setWinner(player1)
    } else
      setWinner(player2)
  }
  }

  function Winner(player){
    console.log(`${player}is the Winner`);
  }

  functio

  return (


    <div className="App">

      <h1>Ping Pong</h1>
      
      <div className="card">
        <input type="text" placeholder="Player 1"
        onChange={(e) => setPlayer1({...player1, name:e.target.value})}
        value={player1.name}
        />
        <br></br>
        <input type="text" placeholder="Player 2" 
        onChange={(e) => setPlayer2({...player2, name:e.target.value})}
        value={player2.name}
        />
        <br></br>
        <button>Start Game</button>
      </div>
      <div>
        <h2>Game</h2>
        {
        "Player 1 " +  <span id = 'score-player1'> 0 </span>  +
         " vs " +
        <span id = 'score-player2'> 0 </span> + " Player2 "
        }
        <br></br>
        <button id ='player1'> Player 1 </button>
        <button id ='player2'> Player 2 </button>
      </div>

    </div>
  );
}

export default App;
