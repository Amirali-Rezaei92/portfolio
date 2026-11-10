const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            AmirAli Rezaei
                        </h3>

                        <p className="mt-3 max-w-md text-sm text-zinc-400">
                            Full Stack Developer focused on building
                            modern, scalable and user‑friendly web
                            applications.
                        </p>
                    </div>

                    
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Amirali-Rezaei92"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#ACC5A6] hover:text-[#ACC5A6]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/amirali-rezaei-milan/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#ACC5A6] hover:text-[#ACC5A6]"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
                    © 2026 AmirAli Rezaei. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;