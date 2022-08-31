import React, { useReducer, createContext, useContext, useCallback, ReactNode, Dispatch } from "react";

export interface WindowState {
    pos1Destination: number | null, 
    pos2Destination: number | null
}

interface WindowsState { 
    [id: string]: WindowState

}

const initialState: WindowsState = {}

export const WindowContext = createContext({} as { windowState: WindowsState, dispatchWindow: Dispatch<WindowActions>});

export type SetWindowsAction = {
  payload: {window: WindowState}
  type: "setWindowsState"
}

export type SetWindowAction = {
  payload: {window: WindowState, id: string}
  type: "setWindowState"
}

export type WindowActions = SetWindowsAction | SetWindowAction;

const windowReducer = (state: WindowsState, action: WindowActions): WindowsState => {
  switch (action.type) {
    case "setWindowsState":
      const newStates = Object.fromEntries(Object.keys(state).map(it => [it, action.payload.window]))
      return {
        ...state, 
        ...newStates
      }
    case "setWindowState":
    return {
      ...state, 
      [action.payload.id]: action.payload.window
    }
    default:
      throw new Error();
  }
};

export const WindowContextProvider = ({ children }: { children: ReactNode }) => {
    const [windowState, dispatchWindow] = useReducer(windowReducer, initialState);
  
    return (
      <WindowContext.Provider value={{windowState, dispatchWindow}}>
        { children }
      </WindowContext.Provider>
    )
  }

export const useWindowState = () => {
  const context = useContext(WindowContext);
  if (context === null) throw Error('useWindowState must be used within a WindowContextProvider');
  return context;
}

