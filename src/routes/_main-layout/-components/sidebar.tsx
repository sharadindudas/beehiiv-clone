import { Link } from "@tanstack/react-router";

const Sidebar = () => {
    return (
        <div className="max-w-sm w-full border-r min-h-screen">
            <h2 className="font-bold text-3xl m-3">Beehiiv</h2>
            <div className="mx-2 space-y-3">
                <Link
                    to="/"
                    activeProps={{ className: "border-primary" }}
                    className="hover:bg-primary hover:text-white cursor-pointer h-12 flex items-center border rounded-lg px-4">
                    Dashboard
                </Link>
                <Link
                    to="/segments"
                    activeProps={{ className: "border-primary" }}
                    className="hover:bg-primary hover:text-white cursor-pointer h-12 flex items-center border rounded-lg px-4">
                    Segments
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
