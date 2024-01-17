import React from "react";
import RegisterCard from "./components/RegisterCard";


const Register = () => { 
    return(
        <main className="container max-w-7xl px-4 mx-auto"> 
        <section className="mt-20 flex items-center justify-center md: mt-32">
            <RegisterCard />
        </section>
    </main>
     ) 
}

export default Register