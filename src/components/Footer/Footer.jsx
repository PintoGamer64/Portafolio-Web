//React
import { useContext } from 'react';

//Context
import ColorContext from "../../context/colorContext/ColorContext";
import LenguajeContext from '../../context/lenguajeContext/LenguajeContext';

//Css
import './Footer.css'

export default function Footer() {

    const { colorBack, textColor } = useContext(ColorContext);
    const { footer } = useContext(LenguajeContext);

    return (
        <footer style={{
            background: colorBack,
            borderColor: textColor
        }}>
            <div>
                <h4 style={{
                    color: textColor
                }}> { footer } </h4>
            </div>
        </footer>
    )
}