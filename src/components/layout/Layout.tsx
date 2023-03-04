import React, { Fragment, ReactNode } from "react";
import MainNavigation from "./MainNavigation";

interface LayoutProps {
    children: string | JSX.Element | JSX.Element[];
}

const Layout:React.FC<LayoutProps> = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;