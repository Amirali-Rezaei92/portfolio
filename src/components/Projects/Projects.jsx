import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12">
                <h2 className="text-5xl font-bold">
                    Featured Projects
                </h2>

                <p className="mt-4 max-w-2xl text-zinc-400">
                    A collection of full stack applications,
                    web platforms, and software solutions.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;