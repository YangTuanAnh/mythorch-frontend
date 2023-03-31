import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CurrentPageContext } from '../context/CurrentPageContext';
import { useAuth } from '../context/AuthContext';
interface SideNavButtonProps {
    name: string,
    route: string,
    icon: React.ReactNode
}

const SideNavButton: React.FC<SideNavButtonProps> = (props) => {
    const { currentUser } = useAuth();
    const { page, setPage } = useContext(CurrentPageContext);
    const router = useRouter();
    
    useEffect(() => {
        if (!currentUser) {
            router.push('/authentication/sign-in');
        }
    }, []);

    if (page === props.name)
        return (
            <div className='flex flex-row justify-center pt-1 mt-1 w-full xl:h-12 sm:h-8 items-center  border border-solid border-l-fourthBLUE border-l-4 bg-s2condINPROGRESS justify-center'>
                <Link href={props.route} className='animate-bounce'>
                    {props.icon}
                </Link>
            </div>
        )
    return (
        <div className='flex flex-row justify-center pt-1 mt-1 w-full xl:h-12 sm:h-8 items-center border-[#99D8F0]  hover:bg-[#99D8F0]' onClick={() => setPage(props.name)}>
            <Link href={props.route}>
                {props.icon}
            </Link>
        </div>
    )
}


export default SideNavButton;