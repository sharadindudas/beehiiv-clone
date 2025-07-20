import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";

const RegisterForm = ({ className, ...props }: React.ComponentProps<"form">) => {
    return (
        <form
            className={cn("flex flex-col gap-6", className)}
            {...props}>
            {/* Form Heading Section */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">Enter your email below to register to your account</p>
            </div>

            {/* Form Content Section */}
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full">
                    Login
                </Button>
            </div>

            {/* Form Footer Section */}
            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>
    );
};

export default RegisterForm;
