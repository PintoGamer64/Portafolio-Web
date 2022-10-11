//React
import { useReducer } from "react";

//Imports
import ColorReducer from "./ColorReducer";
import ColorContext from "./ColorContext";

export default function ColorTheme({ children }) {
    const INITIAL_VALUES = {
        colorBack: '#ffffff',
        background: '#ffffff',
        textColor: '#000000'
    }

    const [state, dispatch] = useReducer(ColorReducer, INITIAL_VALUES)

    const Color = () => {
        dispatch({
            type: state.colorBack === '#ffffff' ? 'DARK' : 'LIGHT'
        })
        console.log(state);
    }

    return (
        <ColorContext.Provider value={{
            Color,
            colorBack: state.colorBack,
            textColor: state.textColor,
            background: state.background
        }}>
            {children}
        </ColorContext.Provider>
    )
}