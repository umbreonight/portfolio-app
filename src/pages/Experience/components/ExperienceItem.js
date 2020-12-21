import React, { Fragment } from "react";

const ExperienceItem = props => {

    let { employer, position, duration, tags = [], overview, duties = [] } = props;

    console.log(duties)

    return (
        <Fragment>
            <div className="experience-item">
                <div className="experience-item-details">
                    <span className="overline">{duration}</span>
                    <h4 className="experience-item-title">{employer}</h4>
                    <h6 className="experience-item-subtitle">{position}</h6>
                    {!!overview && <p className="experience-item-overview">{overview}</p>}
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

export default ExperienceItem;