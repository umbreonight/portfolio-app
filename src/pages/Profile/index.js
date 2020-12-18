import { Icon } from "components";
import React, { Fragment } from "react";
import { ScrollToTop, AppBar } from "components";

const Profile = props => {
    return (
        <Fragment>
            <AppBar back={true} />

            <main>
                <div className="profile">
                    <div className="profile-header">
                        <div className="profile-image">
                            <img src="images/me.jpg" alt=""></img>
                        </div>
                        <h3 className="profile-name">
                            Darren van Reenen
                        <small>Designer and Developer</small>
                        </h3>
                        <hr className="divider"></hr>
                    </div>
                    <div className="profile-skills">
                        <div className="profile-skills-item">
                            <Icon name="design_services" className="icon-36" />
                        </div>
                        <div className="profile-skills-item">
                            <Icon name="code" className="icon-36" />
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <Icon name="keyboard_arrow_down" className="icon-48" />
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Profile;
