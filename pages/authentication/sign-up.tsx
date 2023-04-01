import { useAuth } from "@/components/context/AuthContext";
import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useState } from "react";

const SignUp = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(String(null));
    const { signup } = useAuth()
    const submitHandler = () => {
        if (email === "" || password === "") {
            setError("Please enter email and password");
            return;
        }
        signup(email, password);
        alert("User created");
    }
    return (
        <div className="h-screen bg-primary p-8 text-black">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                <div className="flex flex-col p-3 sm:rounded-3xl shrink md:w-1/2 md:h-3/5 justify-center bg-thirdLOGIN shadow-md">
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Get started for free</h2>
                    {error!==String(null) && <p className='text-red-600'>{error}</p>}
                    <label className="font-semibold md:text-md">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <label className="font-semibold text-black md:text-md">Password</label>
                    <input type="password" name="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <button
                        onClick={submitHandler}
                        className="bg-secondary rounded-full w-full mb-4 p-2 text-neutral-200 font-bold hover:bg-white hover:text-secondary">Sign up</button>
                    <p className="text-secondary mb-4 text-sm">By signing up for MyThorch, you agree to MyThorch&apos;s&nbsp;
                        <a href="#" className="hover:underline">Terms of Service</a> &&nbsp;
                        <a href="#" className="hover:underline">Privacy Policy</a>.
                    </p>
                    <p className="text-secondary text-sm">Already have an account?&nbsp;
                        <Link href="/authentication/sign-in" className="hover:underline">Log in</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;