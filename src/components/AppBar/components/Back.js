import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { Icon } from "components";

const Back = () => {
    const history = useHistory();
    return (
        <Fragment>
            <button to="/hub" className="app-bar-back" onClick={() => history.goBack()}>
                <Icon name="keyboard_arrow_left" className="icon-36" />
                Back
            </button>
        </Fragment>
    );
};

export default Back;
