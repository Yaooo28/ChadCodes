"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "portfolio",
        path: "/portfolio",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
            <Link href={link.path} 
            key={index} 
            /*dito ka mag papalit ng color sa may nav bar sa mga text kung ayaw nila ng color mo */
            className={`${link.path === pathname && "text-blue-400 border-b-2 border-white"
                } capitalize font-medium hover:text-blue-400 transition-all`}>
                {link.name}
            </Link>
            );
        })}
    </nav>
    );
    };

export default Nav