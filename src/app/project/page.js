import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-yellow-400">Projects list</h1>
            <ul>
                <li>
                    <Link href="project/counter">Counter</Link>
                </li>
                <li>
                    <Link href="project/todo">Todo-list</Link>
                </li>
                <li>
                    <Link href="project/cart">Cart</Link>
                </li>
                <li>
                    <Link href="project/weather">Weather</Link>
                </li>
            </ul>
        </div>
    )
}