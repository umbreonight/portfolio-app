import React, { Fragment } from "react";

const Project = props => {

    let {title, subtitle, image, tags = [], description} = props;

    return (
        <Fragment>
            <div className="project">
                <div className="project-image">
                    <img src={image}></img>
                </div>
                <div className="project-details">
                    <h4 className="project-title">{title}</h4>
                    <h6 className="project-subtitle">{subtitle}</h6>
                    <div className="project-tags">
                        <span className="badge">React</span>
                        <span className="badge">SCSS</span>
                    </div>
                    {!!description && <p>{description}</p>}
                </div>
            </div>
        </Fragment>
    );
};

export default Project;