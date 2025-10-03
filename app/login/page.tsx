"use client"
import Info from "../Signup/page";
import { FormEvent, FormEventHandler, useState, useEffect} from "react";
import Link from "next/link";


export default function Login() {
const[firstname, setFirstname] = useState<string>("");
const[password, setPassword] = useState<any>("");
const[storedinfo, setStoredinfo] = useState<{ password?: string}>({});

useEffect(() => {
  const savedInfo = localStorage.getItem("info");
  if (savedInfo) {
    setStoredinfo(JSON.parse(savedInfo));
  }
}, [])

 const handleValidation = (e: FormEvent) => {
        e.preventDefault();
        if (!storedinfo.password) {
          alert("No account found. Please signup first!");
          return;
        }
        if(password === storedinfo.password) {
          alert("successful logIn");
        } else if (password !== storedinfo.password) {
          alert("Invalid Password");
        }
      }

  return (
    <main className="bg-black min-h-screen flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto justify-center">
      <form onSubmit={handleValidation} className="flex flex-col w-sm">
        <h1 className="text-white">LogIn Page</h1>
        <input
        className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="text"
                value={firstname}
                name="fullname"
                placeholder="Enter firstname"
                required
                onChange={e => setFirstname(e.target.value)}
                />
                 <input
        className="border-white border my-2 p-2 rounded-lg block w-full text-white"
                type="password"
                value={password}
                name="password"
                placeholder="password"
                required
                onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="my-4 px-6 py-2 text-2xl bg-white text-black hover:bg-gray-600 hover:cursor-pointer transition-all duration-300 active:scale-95 font-semibold rounded-2xl">LogIn</button> 
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