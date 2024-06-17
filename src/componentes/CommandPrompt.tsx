import { useEffect, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import '../styles/commandPrompt.css'
import Draggable from "react-draggable"
import { delay } from "../utils/delay"
import { useCloseEnableGame } from "../hooks/useCloseEnableGame"

interface CommandPromptProps {
  handleShowMissionDetailsChange: () => void
}

export const CommandPrompt = ({handleShowMissionDetailsChange}: CommandPromptProps) => {
  const {closeEnableGame} = useCloseEnableGame()

  const [showCodeLines, setShowCodeLines] = useState([false, false, false, false])
  
  useEffect(() => {
    async function startCommandPrompt() {
      await delay(4000)
      setShowCodeLines((oldLines) => {
        const newLines = [...oldLines]
        newLines[0] = true
        return newLines
      })
      await delay(2000)
      setShowCodeLines((oldLines) => {
        const newLines = [...oldLines]
        newLines[1] = true
        return newLines
      })
      await delay(400)
      setShowCodeLines((oldLines) => {
        const newLines = [...oldLines]
        newLines[2] = true
        return newLines
      })
      await delay(2000)
      handleShowMissionDetailsChange()
    }

    if (closeEnableGame) startCommandPrompt()
  }, [closeEnableGame, handleShowMissionDetailsChange])

  return (
    <Draggable defaultPosition={{x:-312, y:20}}>
      <div className="command-prompt-container">
        <header>
          <p>Prompt de comando</p>
        </header>
        <article>
          <p>Nuclear System  [ version 21.12.2012 ]</p>
          <p>National Security Agency - United States of America</p>
          { showCodeLines[0] &&
            <div className="line">
              <span>C:\&gt;</span>
              <span> 
                <Typewriter
                  words={['cd nuclear-codes']}
                  typeSpeed={60}
                /> 
              </span> 
            </div>
          }
          { showCodeLines[1] &&
          <>
            <div>
              <p>01/03/2024  14:57 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp; 175  russia</p>
              <p>23/01/2024  16:43 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      china</p>
              <p>23/01/2024  16:43 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      cuba</p>
              <p>12/06/2024  17:45 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp; 649  cazaquistao</p>
              <p>11/05/2024  10:05 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      paquistao</p>
              <p>18/05/2024  12:23 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      arabia-saudita</p>
              <p>15/12/2023  12:23 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      ghost</p>
              <p>12/03/2024  21:53 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;  59  drones</p>
              <p>14/02/2024  17:42 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      submarinos-nucleares</p>
              <p>23/11/2023  15:28 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      relogio-do-juizo-final.exe</p>
              <p>11/02/2024  12:34 &nbsp; &nbsp; &lt;DIR\&gt; &nbsp; &nbsp;      detalhes-da-missão.txt</p>
            </div>
            <div className="dir-content-footer">
              <p>              11 arquivo(s)      6.483.589 bytes</p>
              <p>25 pasta(s)   562.292.379.648 bytes disponíveis</p>
            </div>
          </>
          }
          { showCodeLines[2] &&
            <div className="line">
              <span>C:\nuclear-codes\&gt;</span>
              <span> 
                <Typewriter
                  words={['start detalhes-da-missao.txt']}
                  typeSpeed={60}
                  /> 
              </span> 
            </div>
          }
        </article>
      </div>
    </Draggable>
  )
}

