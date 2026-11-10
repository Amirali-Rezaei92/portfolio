import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-zinc-700">
            <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
            />

            <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">
                    {project.title}
                </h3>

                <p className="mb-6 text-zinc-400">
                    {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to={`/projects/${project.id}`}
                        className="rounded-lg bg-white px-5 py-2 font-medium text-black transition hover:opacity-90"
                    >
                        Details
                    </Link>

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-zinc-600 px-5 py-2 font-medium"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;