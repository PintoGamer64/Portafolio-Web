//Data
import { TecnologiesData } from "./Tecnologies_data"

export default function Tecnologies() {
    return (
        <div className="tecnologies">
            {
                TecnologiesData.map(tech => {
                    return (
                        <div key={tech.id} className="container-tech">
                            <img src={tech.image} alt={`Joan Cardozo ${tech.nombre}`} width={100} height={100} />
                            <code><h1> {tech.nombre} </h1></code>
                        </div>
                    )
                })
            }
        </div>
    )
}