import { PropsWithChildren, createContext, useContext, useState } from "react";

interface RedButtonWasClickedProps {
  redButtonWasClicked: boolean
  handleChangeRedButtonWasClicked: (value: boolean) => void
}

interface RedButtonWasClickedProviderProps extends PropsWithChildren {}

const RedButtonWasClickedContext = createContext({} as RedButtonWasClickedProps)

export const RedButtonWasClickedProvider = ({children}: RedButtonWasClickedProviderProps) => {
  const [redButtonWasClicked, setRedButtonWasClicked] = useState(false)

  function handleChangeRedButtonWasClicked(value: boolean) {
    setRedButtonWasClicked(value)
  }

  return (
    <RedButtonWasClickedContext.Provider value={{redButtonWasClicked, handleChangeRedButtonWasClicked}}>
      {children}
    </RedButtonWasClickedContext.Provider>
  )
}

export const useRedButtonWasClicked = () => {
  const context = useContext(RedButtonWasClickedContext)
  return context
}