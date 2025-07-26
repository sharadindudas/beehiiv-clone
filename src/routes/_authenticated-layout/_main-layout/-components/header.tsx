import { NAVBAR_LINKS } from "@/data/header-data";

const Header = () => {
    return (
        <header className="px-5 fixed top-0 right-0 w-full bg-white p-5 border-b border-gray-200">
            <ul className="flex items-center justify-end gap-6 h-full">
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
