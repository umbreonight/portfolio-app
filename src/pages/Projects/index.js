import React, { Fragment, useState } from "react";
import { ScrollToTop, AppBar } from "components";
import Project from "./components/Project";

const Profile = props => {
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
                            <div className="projects">
                                <Project title="Dark Souls" subtitle="Prepare to Die Edition" image="images/dark-souls-4.jpg" />
                                <Project title="Bloodborne" subtitle="The Old Hunters" image="images/bloodborne.jpeg" />
                                <Project title="Mass Effect" subtitle="Andromeda" image="images/mass-effect.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                                <Project title="Dark Souls" subtitle="Prepare to Die Edition" image="images/dark-souls-4.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum." />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Profile;
