import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "./-components/sidebar";
import Header from "./-components/header";

export const Route = createFileRoute("/_authenticated-layout/_main-layout")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex pr-5">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
