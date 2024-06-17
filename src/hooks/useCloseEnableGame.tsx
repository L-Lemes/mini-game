import { PropsWithChildren, createContext, useContext, useState } from "react";

interface CloseEnableGameProps {
  closeEnableGame: boolean
  handleChangeCloseEnableGame: (value: boolean) => void
}

interface CloseEnableGameProviderProps extends PropsWithChildren {}

const CloseEnableGameContext = createContext({} as CloseEnableGameProps)

export const CloseEnableGameProvider = ({children}: CloseEnableGameProviderProps) => {
  const [closeEnableGame, setCloseEnableGame] = useState(false)

  function handleChangeCloseEnableGame(value: boolean) {
    setCloseEnableGame(value)
  }

  return (
    <CloseEnableGameContext.Provider value={{closeEnableGame, handleChangeCloseEnableGame}}>
      {children}
    </CloseEnableGameContext.Provider>
  )
}

export const useCloseEnableGame = () => {
  const context = useContext(CloseEnableGameContext)
  return context
}