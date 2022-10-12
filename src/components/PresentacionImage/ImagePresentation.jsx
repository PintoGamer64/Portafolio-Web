//React
import { useContext } from "react";

//Context
import ColorContext from "../../context/colorContext/ColorContext";

export default function PresentationImage() {

    const { textColor } = useContext(ColorContext);

    return (
        <article>
                <section id="presentacion2" style={{
                    backdropFilter: textColor === '#ffffff' ?
                        'brightness(0.5)'
                        :
                        'brightness(1)'
                }} >
                </section>
            </article>
    )
}