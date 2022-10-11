//React
import { useEffect, useContext } from "react"

//Context
import LenguajeContext from "../../context/lenguajeContext/LenguajeContext";
import ColorContext from "../../context/colorContext/ColorContext";

//Components
import ProjectsSection from "./Components/ProjectsSection";

//Css
import './Works.css'

export default function Works() {

    const { body } = useContext(LenguajeContext);
    const { textColor } = useContext(ColorContext);
    const { works } = body;

    useEffect(() => {
        fetch('https://api.github.com/users/PintoGamer64/repos')
            .then(res => res.json())
            .then(res => console.log(res))
    }, [])


    return (
        <div className="works">
            <section id="presentacion2" style={{
                    backdropFilter: textColor === '#ffffff' ?
                        'brightness(0.5)'
                        :
                        'brightness(1)'
                }} >
                </section>
            <article>
                <section className="body-sections-work">
                    <div className="titulo">
                        <h1 style={{ color: textColor }}> { works.title } </h1>
                    </div>
                    <ProjectsSection />
                </section>
            </article>
        </div>
    )
}