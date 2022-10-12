//React
import { useReducer } from "react";

//Reducer
import LenguajeReducer from "./LenguajeReducer"

//Conntext
import LenguajeContext from "./LenguajeContext";

export default function LenguajeHandler({ children }) {
    const INITIAL_VALUES = {
        verify: 'es-ES',
        navbar: [
            {
                id: 1,
                nombre: 'Trabajos',
                url: '/works'
            },
            {
                id: 3,
                nombre: 'Inicio',
                url: '/home'
            },
            {
                id: 5,
                nombre: 'Contacto',
                url: '/contact'
            },
        ],
        body: {
            home:
            {
                title: 'Soy Joan Cardozo y este es mi portafolio',
                descripcion: 'Tengo 17 años, vivo en Bogotá Colombia y soy Desarrollador FullStack',
                subtitle: 'Tecnologias que conosco',
                tools: 'Herramientas que uso'
            },
            works:
            {
                title: 'Proyectos personales o grupales',
                descripcion: 'Proyectos en los que he trabajado'
            },
            contact:
            {
                title: 'Contactame 😃',
                descripcion: 'Puedes usar estas redes para contactarme, te estare leyendo'
            }
        },
        footer: 'Derechos a PintoGamer64 / Joan Cardozo 2022'
    }

    const [state, dispatch] = useReducer(LenguajeReducer, INITIAL_VALUES);

    const ChangeLenguaje = () => {
        dispatch({
            type: state.verify === 'es-ES' ? 'en-EN' : 'es-ES'
        })
        console.log(state.verify);
    }

    return (
        <LenguajeContext.Provider value={{
            navbar: state.navbar,
            body: state.body,
            footer: state.footer,
            type: state.verify,
            ChangeLenguaje
        }}>
            {children}
        </LenguajeContext.Provider>
    )

}