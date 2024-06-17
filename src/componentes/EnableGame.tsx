import { useCallback, useState } from "react"
import { LeverSwitchButton } from "./LeverSwitchButton"

import '../styles/enableGame.css'
import { RedButton } from "./RedButton"
import { useRedButtonWasClicked } from "../hooks/useClickInRedButton"

export const EnableGame = () => {
  const {redButtonWasClicked} = useRedButtonWasClicked()

  const [ClicksLeverSwitches, setClicksLeverSwitches] = useState([false, false, false])
  const [hiddenButtons, setHiddenButtons] = useState('')
  
  const handleClicks = useCallback((click: boolean, index: number) => {
    setClicksLeverSwitches((oldClicks) => {
      const newClicks = [...oldClicks]
      newClicks[index] = click
      return newClicks
    })
  }, [])

  const disabledRedButton = ClicksLeverSwitches.every((e) => e === true);

  if (redButtonWasClicked) {
    setTimeout(() => setHiddenButtons('hidden-buttons'), 500)
  }

  return (
    <>
      <div className={redButtonWasClicked ? `buttons invisible-buttons ${hiddenButtons}` : "buttons"}>
        <LeverSwitchButton label="Energy" handleClickLeverSwitches={handleClicks} index={0} />
        <LeverSwitchButton label="Server" handleClickLeverSwitches={handleClicks} index={1} /> 
        <LeverSwitchButton label="Machine" handleClickLeverSwitches={handleClicks} index={2} />
        <RedButton disabled={!disabledRedButton}/>
      </div>
    </>
  )
}