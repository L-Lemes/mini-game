import { useEffect, useRef} from "react"
import ButtonDown from "/button-down.png"
import ButtonUp from "/button-up.png"
import { useRedButtonWasClicked } from "../hooks/useClickInRedButton"

interface RedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RedButton = ({...props}: RedButtonProps) => {
  const {redButtonWasClicked, handleChangeRedButtonWasClicked} = useRedButtonWasClicked()

  const buttonSound = useRef<HTMLAudioElement>(null)
  
  function handleClickedButton() {
    handleChangeRedButtonWasClicked(true)
  }
  
  useEffect(() => {
    if(buttonSound.current && redButtonWasClicked) {
      buttonSound.current.play()
    }
  }, [redButtonWasClicked])

  return (
    <button onClick={handleClickedButton} {...props}>
      <audio ref={buttonSound} src='/botao.mp3' />
      {redButtonWasClicked ? <img src={ButtonDown} width={100} height={100} /> : <img src={ButtonUp} width={100} height={100} />}
    </button>
  )
}