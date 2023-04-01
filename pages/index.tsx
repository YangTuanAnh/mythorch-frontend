import Image from "next/image";
import Hero from "../public/index/hero.svg"
import CTAButtons from "@/components/Hero/CTAButtons";
import Logo from "@/components/Hero/Logo";

const Home = () =>
{
    return (
        <div className="h-screen bg-primary p-8 text-black">
            <Logo />
            <div className="h-full w-full flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-6xl font-bold">
                        Revolutionizes Users&apos; Interaction with Documents
                    </h2>

                    <hr className="my-2 md:my-4 w-4/5 border border-neutral-400" />
                    <p className="md:text-lg font-light mb-8">
                        This is a revolutionary document interaction app that leverages user behavior to embed vectors and store them in a Redis vector database. This process creates a long-term memory AI that truly understands the user&apos;s needs and preferences, leading to a highly efficient reading experience.
                    </p>
                    <div className="flex gap-4">
                        <CTAButtons href="/authentication/sign-up" name="Explore more" />
                        <CTAButtons href="/authentication/sign-in" name="Enter MyThorch" hollow />
                    </div>

                </div>
                <Image src={Hero} alt="Page Hero" className="flex-1 shrink h-4/5 hover:scale-110 transition" />
            </div>
        </div>
    )
}

export default Home;