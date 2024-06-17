import { EnableGame } from "./componentes/EnableGame"
import './styles/App.css'
import { LoadingGame } from './componentes/LoadingGame'
import { Desktop } from './componentes/Desktop'
import { RedButtonWasClickedProvider } from './hooks/useClickInRedButton'
import { CloseEnableGameProvider } from './hooks/useCloseEnableGame'

function App() {
  return (
    <RedButtonWasClickedProvider>
      <CloseEnableGameProvider>
        <div className='app'>
          <EnableGame/>
          <LoadingGame/>
          <Desktop/>
        </div>
      </CloseEnableGameProvider>
    </RedButtonWasClickedProvider>
  ) 
}

export { App }
