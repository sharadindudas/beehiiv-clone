import { createFileRoute, Link } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
import RegisterForm from "../-components/register-form";

export const Route = createFileRoute("/_auth-layout/register/")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <Link
                    to="/dashboard"
                    className="flex items-center gap-2 font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Beehiiv
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}

