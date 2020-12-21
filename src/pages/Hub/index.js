import React, { Fragment, useState } from "react";
import { AppBar, SlickSlider } from "components";
import { HubItem } from "./components";

const Hub = props => {
    const [loading] = useState(false);

    if (!!loading) {
        return <Loading />;
    }

    return (
        <Fragment>
            <AppBar />
            <main>
                
            </main>
        </Fragment>
    );
};

export default Hub;
