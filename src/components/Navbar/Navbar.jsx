import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    to="/"
                    className="text-xl font-bold"
                >
                    A . R
                </Link>

                <div className="flex gap-6">
                    <Link to="/">Home</Link>

                    <Link to="/projects">
                        Projects
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;