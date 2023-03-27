import Image from "next/image";
import Hero from "../public/index/hero.svg"
import CTAButtons from "@/components/Hero/CTAButtons";

const Home = () =>
{
    return (
        <div className="h-screen w-full bg-primary flex flex-col-reverse md:flex-row gap-4 items-center md:p-16 p-8">
            <div className="flex-1">
                <h1 className="text-2xl md:text-6xl font-bold">
                    Revolutionizes Users' Interaction with Documents
                </h1>

                <hr className="my-2 md:my-4 w-4/5 border border-neutral-400" />
                <p className="md:text-lg font-light mb-8">
                    This is a revolutionary document interaction app that leverages user behavior to embed vectors and store them in a Redis vector database. This process creates a long-term memory AI that truly understands the user's needs and preferences, leading to a highly efficient reading experience.
                </p>
                <div className="flex gap-4">
                    <CTAButtons href="/authentication/sign-up" name="Explore more" />
                    <CTAButtons href="/authentication/sign-in" name="Enter MyThorch" hollow />
                </div>

            </div>
            <Image src={Hero} alt="Page Hero" className="flex-1 shrink h-1/5 md:h-full hover:scale-110 transition" />
        </div>
    )
}

export default Home;