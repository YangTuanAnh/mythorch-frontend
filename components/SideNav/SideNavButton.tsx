import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CurrentPageContext } from '../context/CurrentPageContext';
import { LoginContext } from '../context/LoginContext';
interface SideNavButtonProps {
    name: string,
    route: string,
    icon: React.ReactNode
}

const SideNavButton: React.FC<SideNavButtonProps> = (props) => {
    const { hasLogin } = useContext(LoginContext);
    const { page, setPage } = useContext(CurrentPageContext);
    const router = useRouter();
    
    useEffect(() => {
        if (!hasLogin) {
            router.push('/authentication/sign-in');
        }
    }, []);

    if (page === props.name)
        return (
            <div className='rounded-xl flex flex-row justify-center pt-1.5 w-full h-10 border-[#99D8F0] bg-s2condINPROGRESS mx-1 my-1'>
                <Link href={props.route}>
                    {props.icon}
                </Link>
            </div>
        )
    return (
        <div className='rounded-xl flex flex-row justify-center pt-1.5 w-full h-10 border-[#99D8F0] hover:bg-[#99D8F0]  mx-1 my-1' onClick={() => setPage(props.name)}>
            <Link href={props.route}>
                {props.icon}
            </Link>
        </div>
    )
}


export default SideNavButton;