//React
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Context
import ColorContext from "../../context/colorContext/ColorContext";
import LenguajeContext from "../../context/lenguajeContext/LenguajeContext";

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

//Css
import './Navbar.css'

export default function Navbar() {

    const { Color, colorBack, textColor } = useContext(ColorContext);
    const { ChangeLenguaje, navbar, type } = useContext(LenguajeContext);

    const [ImageTheme, setImageTheme] = useState(true);

    const themeHandler = () => {
        setImageTheme(!ImageTheme);
    }

    return (
        <nav>
            <div className="navigator" style={{
                borderColor: textColor,
                background: colorBack
            }}>
                <div className="navigator-buttons">
                    <button id="btn1" className="btn-style" onClick={() => {
                        Color();
                        themeHandler();
                    }}>
                        {
                            ImageTheme
                                ?
                                <span className="svg-icons"><FontAwesomeIcon icon={faSun} /></span>
                                :
                                <span className="svg-icons" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faMoon} /></span>
                        }
                    </button>
                </div>
                <ul id="navigator-liks">
                    {
                        navbar.map(e => {
                            return (
                                <li key={e.id} > <Link to={e.url}><h3 style={{ color: textColor }}>{e.nombre}</h3></Link> </li>
                            )
                        })
                    }
                </ul>
                <div className="navigator-buttons" >
                    <button id="btn2" className="btn-style" onClick={() => ChangeLenguaje()}>
                        <h3 style={{
                            color: textColor
                        }}> { type } </h3>
                        {
                            ImageTheme
                                ?
                                <span className="svg-icons"><FontAwesomeIcon icon={faEarthAmerica} /></span>
                                :
                                <span className="svg-icons" style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faEarthAmerica} /></span>
                        }
                    </button>
                </div>
            </div>
        </nav >
    )
}