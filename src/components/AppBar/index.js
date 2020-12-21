import React, { useState, useEffect, Fragment } from "react";
import { Back } from "./components";
import useScrollPosition from "@react-hook/window-scroll";

const AppBar = props => {
    let { back } = props;
    const scrollY = useScrollPosition(60);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        if (scrollY >= 40) {
            setIsCollapsed(true)
        } else {
            setIsCollapsed(false)
        }
    }, [scrollY])

    return (
        <Fragment>
            <header className={"app-bar " + (isCollapsed ? "is-collapsed" : "")}>
                {!!back ? <Back /> : <img src={"logo192.png"} height="40" width="40" alt="app-logo" className="app-bar-logo" />}
            </header>
        </Fragment>
    );
};

export default AppBar;
