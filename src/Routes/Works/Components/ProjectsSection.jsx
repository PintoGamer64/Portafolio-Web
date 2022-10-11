//Projects Data
import { projects } from "./Projects_data";

export default function ProjectsSection() {
    console.log(projects)
    return (
        <div className="projects">
            {
                projects.map(project => {
                    return (
                        <div key={project.id} className="project-card">
                            <h1> {project.nombre} </h1>
                            <img src={project.image} alt={`demostracion Joan Cardozo ${project.nombre}`} width={350} />
                            <div style={{
                                height: project.deploy_url === undefined ? '124px' : '62px'
                            }} className="github-url">
                                <a
                                    href={project.github_url}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <h3>Github</h3>
                                </a>
                            </div>
                            <div style={{
                                display: project.deploy_url === undefined ? 'none' : 'flex'
                            }} className="deploy-url">
                                <a
                                    href={project.deploy_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3>Go to Website</h3>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}