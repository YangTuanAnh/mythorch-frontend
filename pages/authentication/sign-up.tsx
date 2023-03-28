import { LoginContext } from "@/components/context/LoginContext";
import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from 'react';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(String(null));
    const { hasLogin, setLogin } = useContext(LoginContext);
    const router = useRouter();

    useEffect(() => {
        if (hasLogin) router.push('/profile');
    }, []);


    const submitHandler = () => {
        if (email === "" || password === "") {
            setError("Please enter email and password");
            return;
        }
        setLogin(true);
        router.push('/profile');
    }
    return (
        <div className="h-screen bg-primary p-8">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                <div className="border-2 border-secondary rounded-3xl px-5 py-5 shrink md:w-5/12 bg-thirdLOGIN">
                    {error !== String(null) && <p className='text-red-600'>{error}</p>}
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Get started for free</h2>
                    <label className="font-semibold text-black">Email Address</label>
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