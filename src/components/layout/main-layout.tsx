import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface MainLayoutProps extends ComponentProps<"main"> {
    children: React.ReactNode;
    title: string;
    description: string;
}

export default function MainLayout({
    children,
    className,
    title = "Hi Sharadindu 👋",
    description = "Here's how your publication is doing"
}: MainLayoutProps) {
    return (
        <main className={cn("flex-1 mt-20 ml-72", className)}>
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                <p className="text-gray-600 mt-1">{description}</p>
            </div>
            <div className="w-full flex-1">{children}</div>
        </main>
    );
}
