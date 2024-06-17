import { useEffect, useRef, useState } from 'react'
import '../styles/leverSwitchButton.css'
import Lever from '/lever.png'

interface LeverSwitchButtonProps {
  handleClickLeverSwitches: (value: boolean, position: number) => void
  label: string
  index: number
}

export const LeverSwitchButton = ({handleClickLeverSwitches, label, index}: LeverSwitchButtonProps) => {
  const [clicked, setClicked] = useState(false)
  const somInterruptor = useRef<HTMLAudioElement>(null)

  function handleClickedButton() {
    setClicked(true)
  }

  useEffect(() => {
    if (clicked) {
      handleClickLeverSwitches(clicked, index);

      if(somInterruptor.current) {
        somInterruptor.current.play()
      }
    }

  }, [clicked, handleClickLeverSwitches, index]);
  
  return (
    <div className='lever-switch-container'>
      <audio ref={somInterruptor} src='/interruptor.mp3' />
      <p>{label}</p>
      <button className="base" onClick={handleClickedButton} disabled={clicked}>
        <div className="center">
          <img src={Lever} alt="" className={clicked ? 'lever-up' : 'lever-down'}/>
        </div>
      </button>
    </div>
  )
}