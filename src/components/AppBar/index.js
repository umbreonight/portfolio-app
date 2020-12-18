import React, { Fragment } from "react";
import { Back } from "./components";

const AppBar = props => {
    let { back } = props;

    return (
        <Fragment>
            <header className="app-bar">
                {!!back ? <Back /> : <img src={"logo192.png"} height="40" width="40" alt="app-logo" className="app-bar-logo" />}
            </header>
        </Fragment>
    );
};

export default AppBar;
