import React, { Fragment, useState } from "react";
import { ScrollToTop, AppBar } from "components";
import EducationItem from "./components/EducationItem";

const Education = props => {
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
                                <EducationItem title="Web Publishing and Interactive Media" subtitle="Higher Certificate" duration="2015" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis." />
                                <EducationItem title="Print Design and Publishing" subtitle="Higher Certificate" duration="2015 - 2016" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis." />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Education;
