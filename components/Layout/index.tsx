import SideNav from "../SideNav";

function Layout(props: {children: any}) {
    return (
        <div className="flex flex-row relative bg-primary h-screen overflow-y-auto">
            <SideNav/>
            {props.children}
        </div>
    )
}

export default Layout;