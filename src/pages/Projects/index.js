import React, { Fragment, useState } from "react";
import { ScrollToTop, AppBar } from "components";

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
                                <div className="project">
                                    <div className="project-image">
                                        <img src="images/bluebird.jpg"></img>
                                    </div>
                                    <div className="project-details">
                                        <h4 className="project-title">Project Title</h4>
                                        <h6 className="project-subtitle">gaming themed blog social template</h6>
                                        <div className="project-tags">
                                            <span className="badge">React</span>
                                            <span className="badge">SCSS</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis.</p>
                                    </div>
                                </div>
                                <div className="project">
                                    <div className="project-image">
                                        <img src="images/bluebird.jpg"></img>
                                    </div>
                                    <div className="project-details">
                                        <h4 className="project-title">Project Title</h4>
                                        <h6 className="project-subtitle">gaming themed blog social template</h6>
                                        <div className="project-tags">
                                            <span className="badge">React</span>
                                            <span className="badge">SCSS</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta massa ut hendrerit interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent malesuada malesuada justo a faucibus. Integer sodales felis vitae sapien egestas, non egestas elit auctor. Suspendisse vel nisi suscipit neque interdum facilisis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Profile;
