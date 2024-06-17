import { useState } from "react"
import { CommandPrompt } from "./CommandPrompt"
import { GameWindow } from "./GameWindow"
import '../styles/desktop.css'
import { MissionDetailsWindow } from "./MissionDetailsWindow"
import { useCloseEnableGame } from "../hooks/useCloseEnableGame"
import { delay } from "../utils/delay"
import nsa from '/nsa.png'

interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Desktop = ({...props}: DesktopProps) => {
  const {closeEnableGame} = useCloseEnableGame()

  const [startGame, setStartGame] = useState(false)
  const [showMissionDetails, setShowMissionDetails] = useState(false)

  function handleStartGame() {
    setStartGame(true)
  }

  function handleExitGame() {
    if (startGame) {
      setStartGame(false)
    }
  }

  async function handleRestartGames() {
    if (startGame) {
      setStartGame(false)
      await delay(500)
      setStartGame(true)
    }
  }
    
  function handleShowMissionDetails() {
    setShowMissionDetails(true)
  }

  return (
    <div className={closeEnableGame ? `desktop-container` : `hidden-desktop`} {...props}>
      <div>
      <CommandPrompt handleShowMissionDetailsChange={handleShowMissionDetails}/>
        {showMissionDetails && <MissionDetailsWindow/> }
        {startGame && <GameWindow /> }
      </div>
         
          <div className={closeEnableGame ? "taskbar" : "hidden-taskbar"}>
            <button onClick={handleStartGame}>Iniciar jogo</button>
            <button onClick={handleRestartGames}>Reiniciar</button>
            <button onClick={handleExitGame}>Fechar Jogo</button>
          </div>
      {closeEnableGame && <img src={nsa} alt="logo da nsa" className="nsa-logo"/>}
    </div>
  )
}