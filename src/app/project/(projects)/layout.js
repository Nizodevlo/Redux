import Link from "next/link";


export default function ProjectsLayout({ children }) {
    return (
        <div>
            {children}
            <Link href="/project">Back</Link>
        </div>
    )
}