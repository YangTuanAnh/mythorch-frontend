import { LoginContext } from "@/components/context/LoginContext";
import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useStore } from "@/stores";

const SignUp = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(String(null));
    const { user } = useStore();
    const submitHandler = () => {
        if (email === "" || password === "") {
            setError("Please enter email and password");
            return;
        }
        user.signup(email, password);
        alert("User created");
    }
    return (
        <div className="h-screen bg-primary p-8 text-black">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                <div className="shrink md:w-5/12">
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Get started for free</h2>
                    {error!==String(null) && <p className='text-red-600'>{error}</p>}
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <label className="font-semibold text-black">Password</label>
                    <input type="password" name="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <button
                        onClick={submitHandler}
                        className="bg-secondary rounded-full w-full mb-4 p-2 text-neutral-200 font-bold hover:scale-x-105 transition">Sign up</button>
                    <p className="text-secondary mb-4">By signing up for MyThorch, you agree to MyThorch&apos;s&nbsp;
                        <a href="#" className="hover:underline">Terms of Service</a> &&nbsp;
                        <a href="#" className="hover:underline">Privacy Policy</a>.
                    </p>
                    <p className="text-secondary">Already have an account?&nbsp;
                        <Link href="/authentication/sign-in" className="hover:underline">Log in</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;