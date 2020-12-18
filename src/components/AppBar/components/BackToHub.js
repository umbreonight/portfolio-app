import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Icon } from "components";

const BackToHub = props => {
    return (
        <Fragment>
            <Link to="/hub" className="back-to-hub">
                <Icon name="keyboard_arrow_left" className="icon-36" />
                Back To Hub
            </Link>
        </Fragment>
    );
};

export default BackToHub;
