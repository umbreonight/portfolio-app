import React from "react";
import { Icon } from "../../../components";


const HubItem = props => {
    let { icon, title } = props;
    return (
        <div className="hub-item">
            <div className="hub-title">
                {title}
            </div>
        </div>
    );
};

export default HubItem;
