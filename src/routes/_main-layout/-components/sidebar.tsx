import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <div className={cn("max-w-sm w-full border-r min-h-screen", showSidebar ? "block" : "hidden")}>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl m-3">Beehiiv</h2>
                <Menu
                    className="m-3"
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            </div>
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
