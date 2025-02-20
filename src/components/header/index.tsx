import Link from "next/link"


export const Header = () => {
    return (
        <header className="flex px-10 py-4 bg-black text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div className="font-bold text-3xl ">
                    <h1>NextJS</h1>
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/posts'>
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href='/contatos'>
                                Contatos
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}