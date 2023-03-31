import PageButton from "./SideNavButton";
import Link from 'next/link';
import './routes';
import { routes } from "./routes";
import { useContext } from "react";
import { CurrentPageContext } from "../context/CurrentPageContext";
import { useRouter } from "next/router";
import IconsBar from "./IconsBar";
import { OpenLookUpContext } from "../context/OpenLookup";
import WorkSection from "./WorkSection";
import { Transition } from "@headlessui/react";
import { useAuth } from "../context/AuthContext";


interface SideNavProps {

}
const SideNav: React.FC<SideNavProps> = (props) => {
    const { currentUser, logout } = useAuth();
    const { setPage } = useContext(CurrentPageContext);
    const { isOpen, toggle } = useContext(OpenLookUpContext);

    const router = useRouter();

    if (!currentUser) return null;
    const handleSignOut = () => {
        // setLogin(false);
        setPage('profile');
        logout();
        router.push('/authentication/sign-in');
    }

    return (
        <div className='flex flex-row w-fit'>
            <div className='border-solid border-2 border-[#99D8F0] flex flex-col items-center w-12 h-full relative'>
                <div className='flex flex-row justify-center w-full xl:h-16 sm:h-12 items-center '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 ease-in-out duration-500" onClick={() => toggle(!isOpen)}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9986 6.41914C23.9983 2.87395 21.1242 0.000143433 17.5791 0.000320367L6.41885 0.000877366C2.87374 0.0010543 6.6627e-05 2.87515 0.000325278 6.42034L0.00113953 17.5809C0.00139818 21.1261 2.87549 23.9999 6.42061 23.9997L17.5809 23.9991C21.126 23.9989 23.9996 21.1249 23.9994 17.5797L23.9986 6.41914ZM17.5792 1.67488C20.1995 1.67475 22.3239 3.79886 22.3241 6.41923L22.3249 17.5797C22.3251 20.2001 20.201 22.3244 17.5807 22.3246L6.42048 22.3251C3.80018 22.3253 1.67585 20.2011 1.67566 17.5808L1.67485 6.42026C1.67465 3.7999 3.79867 1.67557 6.41897 1.67544L17.5792 1.67488Z" fill="#8A8A8A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76815 3.34729C9.30574 3.34729 8.93089 3.72215 8.93089 4.18457L8.93089 8.92916L4.18641 8.92916C3.724 8.92916 3.34915 9.30402 3.34915 9.76644C3.34915 10.2289 3.724 10.6037 4.18641 10.6037L9.65651 10.6037C10.1806 10.6037 10.6054 10.1789 10.6054 9.6548L10.6054 4.18457C10.6054 3.72215 10.2306 3.34729 9.76815 3.34729Z" fill="#8A8A8A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2335 20.6511C14.6959 20.6511 15.0708 20.2762 15.0708 19.8138L15.0708 15.0692L19.8152 15.0692C20.2776 15.0692 20.6525 14.6943 20.6525 14.2319C20.6525 13.7695 20.2776 13.3946 19.8152 13.3946L14.3451 13.3946C13.8211 13.3946 13.3962 13.8195 13.3962 14.3436L13.3962 19.8138C13.3962 20.2762 13.7711 20.6511 14.2335 20.6511Z" fill="#8A8A8A" />
                    </svg>
                </div>
                {routes.map(route => <PageButton route={route[0]} icon={route[1]} name={route[2]} />)}
                <div className="absolute bottom-0 flex flex-row pt-1.5 mx-auto hover:bg-[#99D8F0] w-full h-10 justify-center" onClick={handleSignOut}>
                    <Link href='/authentication/sign-in'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </div>
            </div>
            <Transition show={isOpen} enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition ease-in-out duration-300 transform opacity-0"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-full">
                <div className='flex flex-col xl:w-64 sm:w-32 ml-0 h-full border-solid border-2  border-t-[#99D8F0] border-r-[#99D8F0]  border-b-[#99D8F0]'>
                    <IconsBar />
                    <WorkSection folders={[{ name: "Computer Hardware", books: ['Book 1', 'Book 2'] }]} />
                </div>
            </Transition>


        </div>
    )
}

export default SideNav;