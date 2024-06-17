import { useEffect, useRef, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import nsa from '/nsa.png'
import '../styles/loadingGame.css'
import { useRedButtonWasClicked } from '../hooks/useClickInRedButton'
import { delay } from '../utils/delay'
import { useCloseEnableGame } from '../hooks/useCloseEnableGame'

interface LoadingGameProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoadingGame = ({...props}: LoadingGameProps) => {
  const { redButtonWasClicked } = useRedButtonWasClicked()
  const { handleChangeCloseEnableGame } = useCloseEnableGame()

  const [audioStep, setAudioStep] = useState(0)
  const [hiddenLoadingGame, setHiddenLoadingGame] = useState('')

  const textOne = useRef<HTMLAudioElement>(null)
  const textTwo = useRef<HTMLAudioElement>(null)

  

  useEffect(() => {
    if (audioStep === 3) handleChangeCloseEnableGame(true)
  }, [audioStep, handleChangeCloseEnableGame])
  
  useEffect(() => {
    async function startAudio() {
      await delay(1250)
      setAudioStep(1)
      textOne.current?.play()
      await delay(8000)
      setAudioStep(2)
       textTwo.current?.play()
      await delay(8000)
      setAudioStep(3)
      await delay(1900)
      setHiddenLoadingGame('hidden-loading-game')
    }

    if (redButtonWasClicked) {
      startAudio()
    }
    }, [redButtonWasClicked, textOne, textTwo])

  return (
    <div className={redButtonWasClicked ? `loading-game-container ${hiddenLoadingGame}` : `invisible-loading-game`} {...props}>
      <audio ref={textOne} src="/texto-um.mp3"></audio>
      <audio ref={textTwo} src="/texto-dois.mp3"></audio>
      
      <article className={audioStep === 3 ? `invisible-article` : ''}>
        <div className='load-spin'></div>
        { audioStep >= 1 && 
          <Typewriter
          words={['Olá, sou seu assistente nessa missão. Aguarde enquanto preparo a sua máquina.']}
          typeSpeed={70}
          /> 
        }
        { audioStep >= 2 &&
          <Typewriter
          words={['Tudo pronto, agora vou detalhar a sua situação, preste muita atenção. O mundo precisa de você']}
          typeSpeed={65}
          />
        }
      </article>
      <div className={audioStep !== 3 ? 'overlay' : `overlay-black`}></div>
      <img src={nsa} alt="" className='nsa-logo'/>
    </div>
  )
}