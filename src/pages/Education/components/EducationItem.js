import React, { Fragment } from "react";

const EducationItem = props => {

    let {title, subtitle, duration, tags = [], description} = props;

    return (
        <Fragment>
            <div className="education-item">
                <div className="education-item-details">
                    <span className="overline">{duration}</span>
                    <h4 className="education-item-title">{title}</h4>
                    <h6 className="education-item-subtitle">{subtitle}</h6>
                    {!!description && <p>{description}</p>}
                </div>
            </div>
        </Fragment>
    );
};

export default EducationItem;