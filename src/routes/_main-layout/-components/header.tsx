import { NAVBAR_LINKS } from "@/data/header-data";

const Header = () => {
    return (
        <header className="mt-4 px-5">
            <ul className="flex items-center justify-end gap-6">
                {NAVBAR_LINKS.map((item) => (
                    <li
                        className="cursor-pointer"
                        key={item.id}>
                        {item.name && item.name}
                        {item.icon && <item.icon />}
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
