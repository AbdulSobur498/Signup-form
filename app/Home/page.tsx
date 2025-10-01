import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-black justify-center min-h-screen flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto">
            <div className="text-yellow-500">
                <h1 className="my-4 px-6 py-2 text-2xl">Welcome</h1>
                            <p>Choose a page:</p>
                            <ul>
                                <li><Link href="/Signup">Signup</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/Edit-Signup">Edit Signup</Link></li>
                            </ul>
            </div>
             
        </main>

    )
}