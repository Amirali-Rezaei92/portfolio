import wall from "../../assets/images/wall.png";
import self from "../../assets/images/self.jpeg";

const Hero = () => {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat "
            style={{
                backgroundImage: `url(${wall})`,
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex min-h-screen flex-col-reverse items-center justify-center px-6 lg:flex-row lg:px-20">
                <div className="flex w-full flex-col justify-center text-center lg:w-2/3 lg:text-left">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-400 md:text-sm">
                        Full Stack Developer
                    </span>

                    <h1 className="mt-15  text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-6xl mb-10 text-[#ACC5A6]">
                        AmirAli
                        <br />
                        Rezaei
                    </h1>

                    <p className="mt-20 max-w-xl text-base leading-7 text-zinc-400 md:text-lg lg:mx-0">
                        I build modern, scalable and user-focused web
                        applications using React, Node.js, Express and
                        PostgreSQL.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start">
                        <a
                            href="/projects"
                            className="rounded-xl bg-[#ACC5A6] px-8 py-4 text-center font-semibold text-black transition hover:opacity-90"
                        >
                            View Projects
                        </a>

                        <a
                            href="/contact"
                            className="rounded-xl border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
                        >
                            Contact Me
                        </a>
                    </div>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border px-8 py-4 text-center font-semibold text-black bg-[#E5D3AF] transition hover:bg-white hover:text-black mt-3 w-84"
                    >
                        View CV
                    </a>

                </div>

                <div className="mb-10 flex w-full justify-center lg:mb-0 lg:w-1/3">
                    <div className="relative">
                        <div className="absolute top-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-black via-black/80 to-transparent" />

                        <img
                            src={self}
                            alt="Profile"
                            className="h-[320px] w-[260px] object-cover shadow-2xl sm:h-[420px] sm:w-[320px] md:h-[500px] md:w-[380px] lg:h-[650px] lg:w-full lg:max-w-[420px]"
                        />

                        <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-black via-black/80 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;