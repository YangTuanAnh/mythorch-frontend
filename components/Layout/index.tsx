import SideNav from "../SideNav";

function Layout(props: {children: any}) {
    return (
        <div className="flex flex-row relative bg-primary h-screen h-full">
            <SideNav/>
            {props.children}
        </div>
    )
}

export default Layout;