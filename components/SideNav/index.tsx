import PageButton from "./SideNavButton";
import Link from 'next/link';
import './routes';
import { routes } from "./routes";

function SideNav() {
    return (
        <div className='border-solid border-2 border-[#99D8F0] flex flex-col items-center w-12 h-full relative'>
            {routes.map(route => <PageButton route={route[0]} icon={route[1]} />)}
            <div className="absolute bottom-0 flex flex-row pt-1.5 mx-auto hover:bg-[#99D8F0] w-full h-10 justify-center">
                <Link href='/authentication/sign-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default SideNav;