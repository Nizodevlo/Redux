"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navigation() {
    const pathName = usePathname();
    return (
        <nav className="border border-white rounded-lg shadow-[0px_0px_500px_1px_white]">
            <Link 
                href="/"
                className={pathName === "/" ? "font-bold text-white px-5" : "text-yellow-500 px-5"}
            >
                Home
            </Link>
            <Link 
                href="/project"
                className={pathName === "/project" ? "font-bold text-white px-5" : "text-yellow-500 px-5"}
            >
                Projects
            </Link>
        </nav>
    )
}

