import React, { Fragment } from "react";

const EducationItem = props => {

    let { school, course, duration, tags = [], overview, duties = [] } = props;

    return (
        <Fragment>
            <div className="education-item">
                <div className="education-item-details">
                    <span className="overline">{duration}</span>
                    <h4 className="education-item-title">{course}</h4>
                    <h6 className="education-item-subtitle">{school}</h6>
                    {!!overview && <p className="education-item-overview">{overview}</p>}
                    {!!duties &&
                        <Fragment>
                            <span className="caption text-uppercase font-heavy">Duties:</span>
                            <ul className="browser-default list">
                                {
                                    duties.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </Fragment>
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default EducationItem;