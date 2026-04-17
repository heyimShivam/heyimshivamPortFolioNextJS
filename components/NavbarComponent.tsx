import { Rubik } from "next/font/google";

const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

function NavbarComponent() {
    return (<div className={`bg-neutral-950 absolute top-0 text-white z-50 fixed w-full flex flex-row pt-2 justify-between font-normal ${font.className}`}>
        <div className="p-4 pl-9 font-semibold cursor-pointer">&lt;Heyimshivam /&gt;</div>
        <ul className="flex flex-row pr-9 font-normal text-md">
            <li className="relative p-4 cursor-pointer group">
                Home
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
            <li className="relative p-4 cursor-pointer group">
                About
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
            <li className="relative p-4 cursor-pointer group">
                Projects
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
            <li className="relative p-4 cursor-pointer group">
                Experience
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
            <li className="relative p-4 cursor-pointer group">
                Contacts Me
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
        </ul>
    </div>);
}

export default NavbarComponent;
