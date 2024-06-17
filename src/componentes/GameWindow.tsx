import Draggable from "react-draggable"
import '../styles/gameWindow.css'
import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { generateRandomKeys } from "../utils/generateKeys"


export function GameWindow() {

  const [currentKeys, setCurrentKeys] = useState<string[]>([])
  const [seconds, setSeconds] = useState(6)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)
  const [correctKeys, setCorrectKeys] = useState<boolean[]>([])


  const randomKeys = useRef(generateRandomKeys()).current
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if(!win || gameOver) {
      setCurrentKeys(prev => prev.concat(event.key))
        if(randomKeys[currentKeys.length] !== event.key){
          setGameOver(true)
        } else {
          setCorrectKeys((prev) => prev.concat(true))
        }
      }
  }
    

  useEffect(() => {
      ref.current?.focus()
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let interval: number
    if(seconds >= 0.1 && !gameOver && correctKeys.length < 6) {
      interval = setInterval(() => setSeconds((time) => time - 0.1), 100)
    } else if (correctKeys.length === 6) {
      setWin(true)
    }
    else {
      setGameOver(true)
    }
    return () => clearInterval(interval)
  }, [seconds, gameOver, correctKeys])

  return (
    <Draggable
      defaultPosition={{x: 20, y: -360}}
    >
      <div className="game-window-container">
        <header>
          <p>Relógio do Juizo Final</p>
        </header>
        <article>
          <p>* O tempo é esencial, se ele acabar você perde</p>
          <p>* A precisão é imprecindível, Se você errar você perde</p>
        </article>
        <h1 className="cronometro">{seconds.toFixed(2)}</h1>
        <div ref={ref} tabIndex={-1} onKeyDown={handleKeyDown} className={!gameOver ?"random-keys-container" : "hidden-random-keys-container"}>
          {randomKeys.map((key, i) => {
            return (
            <div key={i} className={currentKeys[i] === key ? 'green random-key-field' : 'random-key-field'}>
              <p >{key}</p>
            </div>
          )})}
        </div>
        <p className={gameOver ? "game-over" : "hidden-result"}>GAME OVER</p>
      </div>
    </Draggable>
  )
}
