//React
import { useCallback, useContext } from "react"

//Components
import Tecnologies from "./Components/Tecnologies";
import Tools from "./Components/Tools";

//Context
import ColorContext from "../../context/colorContext/ColorContext";
import LenguajeContext from "../../context/lenguajeContext/LenguajeContext";

//Css
import './Home.css'

export default function Home() {
    const { body } = useContext(LenguajeContext);
    const { textColor } = useContext(ColorContext);
    const { home } = body;

    const borderColor = useCallback(() => {
        if (textColor === '#ffffff') {
            return '2px solid #840000'
        } else {
            return '2px solid #1a1a40'
        }
    }, [textColor])

    return (
        <div id="home">
            <article>
                <section id="presentacion" style={{
                    backdropFilter: textColor === '#ffffff' ?
                        'brightness(0.5)'
                        :
                        'brightness(1)'
                }} >
                    <div className="img-profiles">
                        <img src="https://avatars.githubusercontent.com/u/84690368?v=4" alt="Joan Cardozo Github Profile" />
                    </div>
                    <div className="spotify-activity" style={{
                        borderLeft: textColor === '#ffffff' ?
                            'solid 20px #000000'
                            :
                            'solid 20px #ffffff',
                        borderRight: textColor === '#ffffff' ?
                            'solid 20px #000000'
                            :
                            'solid 20px #ffffff',
                    }}>
                        <img src="https://spotify-github-profile.vercel.app/api/view?uid=uwjnzqtalkghfb2gd7ueltxzb&cover_image=true&theme=novatorem&bar_color=ff0000&bar_color_cover=falsespo" alt="Joan Cardozo Spotify Activity" />
                    </div>
                    <div className="img-profiles">
                        <img src="https://i.pinimg.com/originals/f0/e9/1e/f0e91ef62bbb1e6beb5c6c9ee9811197.jpg" alt="Joan Cardozo Github Profile" />
                    </div>
                </section>
                <section className="body-sections">
                    <div className="titulo" style={{
                        borderBottom: borderColor()
                    }}>
                        <h1 style={{ color: textColor }}> {home.title} </h1>
                    </div>
                    <div className="descripcion">
                        <h3 style={{ color: textColor }}> {home.descripcion} </h3>
                    </div>
                </section>
                <section className="body-sections">
                    <div className="titulo" style={{
                        borderBottom: borderColor()
                    }}>
                        <h1 style={{ color: textColor }}> {home.subtitle} </h1>
                    </div>
                    <Tecnologies />
                </section>
                <section className="body-sections">
                    <div className="titulo" style={{
                        borderBottom: borderColor()
                    }}>
                        <h1 style={{ color: textColor }}> {home.tools} </h1>
                    </div>
                    <Tools />
                </section>
            </article>
        </div>
    )
}