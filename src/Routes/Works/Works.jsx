//React
import { useEffect, useContext } from "react"

//Context
import LenguajeContext from "../../context/lenguajeContext/LenguajeContext";
import ColorContext from "../../context/colorContext/ColorContext";

//Components
import ProjectsSection from "./Components/ProjectsSection";
import PresentationImage from "../../components/PresentacionImage/ImagePresentation";

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
            <PresentationImage />
            <article>
                <section className="body-sections-work">
                    <div className="titulo">
                        <h1 style={{ color: textColor }}> {works.title} </h1>
                    </div>
                    <ProjectsSection />
                </section>
            </article>
        </div>
    )
}