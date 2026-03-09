import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-6 border-b border-(--secondary-accent)">
            <Link href="/" className="font-handjet text-2xl text-[#EDEBE6]" style={{ textDecoration: "none", color: "#EDEBE6" }}>
                Disconnect Society
            </Link>
            <ul className="flex gap-8 font-handjet text-lg text-[#EDEBE6]">
                <li><Link href="/about" style={{ textDecoration: "none", color: "#EDEBE6" }} className="hover:opacity-70 transition-opacity">About</Link></li>
            </ul>
        </nav>
    );
}
