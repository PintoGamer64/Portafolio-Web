//React
import { useContext } from "react";

//Contexts
import LenguajeContext from "../../context/lenguajeContext/LenguajeContext";
import ColorContext from "../../context/colorContext/ColorContext";

//Components
import PresentationImage from "../../components/PresentacionImage/ImagePresentation";

//Contact Data
import { Contact_data } from "./CONTACT_data";

//Css
import './Contact.css'

export default function Contact() {

    const { body } = useContext(LenguajeContext);
    const { textColor } = useContext(ColorContext);
    const { contact } = body;

    return (
        <div className="contact">
            <PresentationImage />
            <article>
                <section className="body-sections">
                    <h1 style={{
                        color: textColor
                    }}> {contact.title} </h1>
                    <h3 style={{
                        color: textColor
                    }}> {contact.descripcion} </h3>
                </section>
            </article>
            <article>
                <section className="body-sections-contact">
                    {
                        Contact_data.map(contact => {
                            return (
                                <div key={contact.id} className="project-card">
                                    <h1> {contact.nombre} </h1>
                                    <img src={contact.image} alt={`contacto Joan Cardozo ${contact.nombre}`} width={100} />
                                    <div className="github-url">
                                        <a href={contact.link} target='_blank' rel="noreferrer">
                                            <h3>Link</h3>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </article>
        </div>
    )
}