import { LoginContext } from "@/components/context/LoginContext";
import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext, useState } from "react";

const SignIn = () => {
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
                <div className="border-2 border-secondary rounded-3xl shrink md:w-5/12 bg-thirdLOGIN px-5 py-5">
                    {error !== String(null) && <p className='text-red-600'>{error}</p>}
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Log in to MyThorch</h2>
                    <label className="font-semibold text-black">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <label className="font-semibold text-black my-1">Password</label>
                    <input type="password" name="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full my-4 px-4 py-2 bg-tertiary rounded-full text-black" />
                    <Link href="#" className="text-secondary font-bold">I forgot my password</Link>
                    <button
                        onClick={submitHandler}
                        className="bg-secondary rounded-full w-full my-4 p-2 text-neutral-200 font-bold hover:scale-x-105 transition">Login</button>
                    <p className="text-secondary mt-5">Don't have an account?&nbsp;
                        <Link href="/authentication/sign-up" className="hover:underline">Register</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;