import React, { useReducer, createContext, useContext, useCallback, ReactNode, Dispatch } from "react";

export interface WindowState {
    pos1Destination: number | null, 
    pos2Destination: number | null
}

interface WindowsState { 
    window1: WindowState
    window2: WindowState
    window3: WindowState
    window4: WindowState
}

const initialState: WindowsState = {
    window1: {
        pos1Destination: null,
        pos2Destination: null
    },
    window2: {
        pos1Destination: null,
        pos2Destination: null
    },
    window3: {
        pos1Destination: null,
        pos2Destination: null
    },
    window4: {
        pos1Destination: null,
        pos2Destination: null
    }
};

export const WindowContext = createContext({} as { windowState: WindowsState, dispatchWindow: Dispatch<SetWindowAction>});

export type SetWindowAction = {
    payload: WindowState
    type: "setWindowState"
}

const windowReducer = (state: WindowsState, action: SetWindowAction): WindowsState => {
  switch (action.type) {
    case "setWindowState":
        return {
          ...state, 
          window1: action.payload,
          window2: action.payload,
          window3: action.payload,
          window4: action.payload
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

