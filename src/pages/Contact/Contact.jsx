import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <div className="mb-16 text-center">
                <h1 className="mb-4 text-5xl font-bold">
                    Contact Me
                </h1>

                <p className="text-zinc-400">
                    Let's build something amazing together.
                </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
                <a
                    href="https://github.com/Amirali-Rezaei92"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-[#ACC5A6]"
                >
                    <FaGithub
                        size={50}
                        className="mb-4 text-[#ACC5A6]"
                    />

                    <span className="font-semibold">
                        GitHub
                    </span>
                </a>

                <a
                    href="https://www.linkedin.com/in/amirali-rezaei-milan/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-[#ACC5A6]"
                >
                    <FaLinkedin
                        size={50}
                        className="mb-4 text-[#ACC5A6]"
                    />

                    <span className="font-semibold">
                        LinkedIn
                    </span>
                </a>

                <a
                    href="https://wa.me/393248457636"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-[#ACC5A6]"
                >
                    <FaWhatsapp
                        size={50}
                        className="mb-4 text-[#ACC5A6]"
                    />

                    <span className="font-semibold">
                        WhatsApp
                    </span>
                </a>
            </div>

            <form className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-[#ACC5A6]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Message
                    </label>

                    <textarea
                        rows="6"
                        placeholder="Your message..."
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-[#ACC5A6]"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-xl bg-[#ACC5A6] px-6 py-3 font-semibold text-black transition hover:opacity-90"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;