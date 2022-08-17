import React, { useReducer, createContext, useContext, useCallback, ReactNode, Dispatch } from "react";

export interface WindowState {
    pos1Destination: number | null, 
    pos2Destination: number | null
}

interface WindowsState { 
    0: WindowState
    1: WindowState
    2: WindowState
    3: WindowState
}

const initialState: WindowsState = {
    0: {
        pos1Destination: null,
        pos2Destination: null
    },
    1: {
        pos1Destination: null,
        pos2Destination: null
    },
    2: {
        pos1Destination: null,
        pos2Destination: null
    },
    3: {
        pos1Destination: null,
        pos2Destination: null
    }
};

export const WindowContext = createContext({} as { windowState: WindowsState, dispatchWindow: Dispatch<WindowActions>});

export type SetWindowsAction = {
  payload: {window: WindowState, number: number}
  type: "setWindowsState"
}

export type SetWindowAction = {
  payload: {window: WindowState, number: number}
  type: "setWindowState"
}

export type WindowActions = SetWindowsAction | SetWindowAction;

const windowReducer = (state: WindowsState, action: WindowActions): WindowsState => {
  switch (action.type) {
    case "setWindowState":
        return {
          ...state, 
          0: action.payload.window,
          1: action.payload.window,
          2: action.payload.window,
          3: action.payload.window
        }
    case "setWindowsState":
    return {
      ...state, 
      [action.payload.number]: action.payload.window
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

