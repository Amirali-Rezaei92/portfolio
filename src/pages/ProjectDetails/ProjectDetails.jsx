import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectDetails = () => {
    const { id } = useParams();

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    if (!project) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Project Not Found
                </h1>
            </div>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <img
                src={project.image}
                alt={project.title}
                className="mb-10 h-[500px] w-full rounded-3xl object-cover"
            />

            <h1 className="mb-4 text-5xl font-bold">
                {project.title}
            </h1>

            <p className="mb-10 text-lg text-zinc-400">
                {project.description}
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-zinc-800 px-4 py-2 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mb-16 flex flex-wrap gap-4">
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
                >
                    Live Demo
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white px-6 py-3 transition hover:bg-white hover:text-black"
                >
                    GitHub
                </a>
            </div>

            {project.video && (
                <>
                    <h2 className="mb-6 text-3xl font-bold">
                        Demo Video
                    </h2>

                    <video
                        controls
                        className="mb-16 w-full rounded-3xl"
                    >
                        <source
                            src={project.video}
                            type="video/mp4"
                        />
                    </video>
                </>
            )}

            {project.features && (
                <>
                    <h2 className="mb-6 text-3xl font-bold">
                        Features
                    </h2>

                    <div className="mb-16 grid gap-4 md:grid-cols-2">
                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-xl bg-zinc-900 p-5"
                            >
                                ✓ {feature}
                            </div>
                        ))}
                    </div>
                </>
            )}

            {project.gallery && (
                <>
                    <h2 className="mb-6 text-3xl font-bold">
                        Gallery
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {project.gallery.map(
                            (image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title}-${index}`}
                                    className="h-72 w-full rounded-2xl object-cover"
                                />
                            )
                        )}
                    </div>
                </>
            )}
        </section>
    );
};

export default ProjectDetails;