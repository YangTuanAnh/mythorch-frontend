import Link from "next/link"

interface CTAButtonProps {
    href: any;
    name: string;
    hollow?: boolean;
}
const CTAButtons = ({href, name, hollow = false} : CTAButtonProps) => {
    return (
        <Link 
            href={href} 
            className={`
                ${!hollow && 'bg-secondary text-white'} 
                ${hollow && 'text-secondary'} 
                border border-secondary rounded-full p-4 font-bold shrink whitespace-nowrap hover:scale-110 transition`}>
            {name}
        </Link>
    )
}

export default CTAButtons