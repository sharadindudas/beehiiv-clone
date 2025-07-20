import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "./-components/sidebar";
import Header from "./-components/header";

export const Route = createFileRoute("/_main-layout")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <div className="flex justify-center">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

