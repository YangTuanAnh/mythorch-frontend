import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useState } from "react";

const SignUp = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(String(null));
    const submitHandler = () => {
        if (email==="" || password==="") {
            setError("Please enter email and password");
            return;
        }
    }
    return (
        <div className="h-screen bg-primary p-8">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                <div className="shrink md:w-5/12">
                    {error!==String(null) && <p className='text-red-600'>{error}</p>}
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Get started for free</h2>
                    <label className="font-semibold">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 px-4 py-2 bg-tertiary rounded-full" />
                    <label className="font-semibold">Password</label>
                    <input type="password" name="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 px-4 py-2 bg-tertiary rounded-full" />
                    <button 
                        onClick={submitHandler} 
                        className="bg-secondary rounded-full w-full mb-4 p-2 text-neutral-200 font-bold hover:scale-105 transition">Sign up</button>
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