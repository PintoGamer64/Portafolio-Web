//Data
import { ToolsData } from "./Tools_data"

function Tools() {

    return (
        <div className="tecnologies">
            {
                ToolsData.map( tool => {
                    return (
                        <div key={tool.id} className="container-tools">
                            <img src={tool.image} alt={`Joan Cardozo ${tool.nombre}`} width={80} height={80}/>
                            <code><h1> { tool.nombre } </h1></code>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tools