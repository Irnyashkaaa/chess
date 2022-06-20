import { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent.tsx';
import { Board } from './models/Board.ts'
import { Player } from './models/Player.ts';
import { colorsEnum } from './models/Cell.ts';
import { LostFigures } from './components/LostFigures.tsx';

function App() {

  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(colorsEnum.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(colorsEnum.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setCurrentPlayer(whitePlayer)
    setBoard(newBoard)
  }

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer?.color === colorsEnum.BLACK ? whitePlayer : blackPlayer)
  }

  return (
    <div className="App">
      <BoardComponent restart={restart} board={board} setBoard={setBoard} currentPlayer={currentPlayer} changePlayer={changePlayer} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <LostFigures title={'Black figures'} figures={board.lostBlackFigures} />
        <LostFigures title={'White figures'} figures={board.lostWhiteFigures} />
      </div>

    </div>
  );
}

export default App;
