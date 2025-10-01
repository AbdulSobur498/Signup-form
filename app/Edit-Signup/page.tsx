"use client"

import Info from "../Signup/page";
import { useEffect, useState} from "react";
import Link from "next/link";
export default function Editinfo() {
    const [signupInfo, setSignupInfo] = useState<any>(null);

    useEffect(() => {
        const data = localStorage.getItem("info");
        if (data) {
            setSignupInfo(JSON.parse(data));
        }
    }, [])

    if (!signupInfo) {
        return (
            <div>
                <p>No signup information found.</p>
            </div>
        )
    }
    return(
<main className="bg-black min-h-screen text-white justify-content flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto">

                <h2><strong>Signup Information</strong></h2>
                <p>
                    <strong>First Name:</strong>
                    {signupInfo.firstname}
                </p>
                <p>
                    <strong>Last Name:</strong>
                    {signupInfo.lastname}
                </p>
                <p>
                    <strong>Age:</strong>
                    {signupInfo.age}
                </p>

                 <p>
                    <strong>Email:</strong>
                    {signupInfo.email}
                </p>

                 <p>
                    <strong>Password:</strong>
                    {signupInfo.password}
                </p>
    
                 <Link href="/Home">Back to Home</Link>
                 
            </main>
    )
}