import Image from "next/image"
import thumbLogo from "../../public/logo.png"
import Link from "next/link"

const Logo = () =>
{
    return (
        <Link href="/" className="flex items-center absolute">
            <Image src={thumbLogo} alt="Logo" height="60" className="hover:rotate-[15deg] transition" />
            <h1 className="text-secondary text-2xl font-black">MyThorch</h1>
        </Link>
    )
}

export default Logo