import React, { Fragment, useState } from "react";
import { ScrollToTop, AppBar } from "components";
import EducationItem from "./components/EducationItem";

const Education = props => {

    const schools = [
        {
            duration: "2015",
            school: "Friends of Design",
            course: "Web Publishing and Interactive Media",
            overview: "Mobile app and responsive web development. Building front end user interfaces with ReactJS and integrating with back end logic using AdonisJS. Full stack development of internal development projects.",
            duties: [
                "Front end UI library development",
                "Mobile and PWA development with ReactJS",
                "Conceptualising and designing UI component libraries for responsive web development.",
                "Bug fixes and rapid deployment to staging and live production websites and mobile web applications"
            ]
        },
        {
            duration: "2015 - 2016",
            school: "Friends of Design",
            course: "Print Design and Publishing",
            overview: "Two years working on Old Mutual South Africa Transformation project. During my time here I worked from concept to development alongside Experience Designers and UI Designers to produce a completely digital solution to an otherwise paper-based process.",
            duties: [
                "Front end development for corporate ui kit and sales platforms",
                "Version control and technical documentation management using the Atlassian software suite; including BitBucket, Jira, and Confluence.",
            ]
        }
    ]

    const [loading] = useState(false);

    if (!!loading) {
        return <Loading />;
    }
    return (
        <Fragment>
            <AppBar back={true} />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-sm-offset-1">
                            <h3 className="section-title">Education</h3>
                            <hr className="divider"></hr>
                            <div className="education-items">
                                {
                                    schools.map((job, index) => {
                                        return <EducationItem key={index} duration={job.duration} school={job.school} course={job.course} overview={job.overview} duties={job.duties} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Education;
