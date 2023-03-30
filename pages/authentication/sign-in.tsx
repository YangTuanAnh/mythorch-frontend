import { LoginContext } from "@/components/context/LoginContext";
import { useAuth } from "@/components/context/AuthContext";
import Logo from "@/components/Hero/Logo";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from 'next/router'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(String(null));
    const { login } = useAuth();
    const router = useRouter();
    const { hasLogin, setLogin } = useContext(LoginContext);

    const submitHandler = async () => {
        if (email==="" || password==="") {
            setError("Please enter email and password");
            return;
        }

        try {
            await login(email, password);
            //alert(user.currentUser.uid)
            setLogin(true);
            router.push("/webapp")
        } catch (err) {
            setError('Incorrect email or password')
        }
    }
    return (
        <div className="h-screen bg-primary p-8 text-black">
            <Logo />
            <div className="h-full w-full flex items-center justify-center">
                <div className="shrink md:w-5/12">
                    <h2 className="text-4xl font-bold text-neutral-600 text-center mb-4">Log in to MyThorch</h2>
                    {error!==String(null) && <p className='text-red-600'>{error}</p>}
                    <label className="font-semibold">Email Address</label>
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