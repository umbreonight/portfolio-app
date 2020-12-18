import React, { Fragment, useState } from "react";
import { ScrollToTop, AppBar } from "components";
import EducationItem from "./components/EducationItem";

const Experience = props => {
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
                            <h3 className="section-title">Experience</h3>
                            <hr className="divider"></hr>
                            <div className="education-items">
                                <EducationItem title="VML South Africa" subtitle="Junior front end developer" duration="Sept 2019 - Nov 2020" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis." />
                                <EducationItem title="Ole!Connect" subtitle="Intermediate front end developer" duration="Sept 2019 - nov 2020" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis." />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Experience;
