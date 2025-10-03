"use client"


import { FormEvent, FormEventHandler, useState} from "react";
import Link from "next/link";


export default function Info() {
    const[firstname, setFirstname] = useState<string>("");
    const[lastname, setLastname] = useState<string>("");
    const[age, setAge] = useState<number>(0);
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<any>("");

    const handleValidation = (e: FormEvent) => {
        e.preventDefault();
        if(!/^[a-zA-Z]+$/.test(firstname)) {
            alert("Boss, put in a first name!");
            return;
        }
         if(!/^[a-zA-Z]+$/.test(lastname)) {
            alert("Boss, put in a last name!");
            return;
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("info", JSON.stringify({
            firstname,
            lastname,
            age,
            email,
            password,
        }))
        }
        
    }

    return(
        <main className="bg-black min-h-screen flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto">
            <form onSubmit={handleValidation} className="flex flex-col w-sm">
                <h1 className="text-white my-4 px-6 py-2 text-2xl ">Signup Page</h1>
                <input
                className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="text"
                value={firstname}
                name="firstname"
                placeholder="Firstname"
                required
                onChange={e => setFirstname(e.target.value)}
                />

                 <input
                className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="text"
                value={lastname}
                name="lastname"
                placeholder="Lastname"
                required
                onChange={e => setLastname(e.target.value)}
                />





                 <input
                className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="number"
                value={age}
                name="age"
                placeholder="Age"
                onChange={e => setAge(parseInt(e.target.value))}
                />

                 <input
                className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="text"
                value={email}
                name="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                
                />

                  <input
                className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                
                />
                <button type="submit"className="my-4 px-6 py-2 text-2xl bg-white text-black hover:bg-gray-600 hover:cursor-pointer transition-all duration-300 active:scale-95 font-semibold rounded-2xl">
                    Submit
                </button>
                <nav className="flex space-x-6">
                    <Link href="/login" className="underline text-blue-500 hover:text-blue-700">
                  login
                </Link>
                 <Link href="/Home" className="underline text-blue-500 hover:text-blue-700">
                  Home
                </Link>
                    </nav>  
                
            </form>
        </main>
    )
}
