import { authBgImage } from "@/assets/auth";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth-layout")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="hidden lg:block">
                <img
                    src={authBgImage}
                    alt="auth-background-image"
                    className="h-full w-full object-cover"
                />
            </div>
            <Outlet />
        </div>
    );
}

