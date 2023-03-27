import Link from 'next/link';
function SideNavButton(props: { route: string, icon: React.ReactNode }) {
    return (
        <div className='flex flex-row justify-center pt-1.5 w-full h-10 border-[#99D8F0] hover:bg-[#99D8F0]'>
            <Link href={props.route}>
                {props.icon}
            </Link>
        </div>
    )
}

export default SideNavButton;