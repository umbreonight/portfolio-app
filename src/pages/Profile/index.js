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
                    </div>
                    <div className="profile-skills">
                        <div className="profile-skills-item">
                            <Icon name="phone" className="icon-36" />
                        </div>
                        <div className="profile-skills-item">
                            <Icon name="email" className="icon-36" />
                        </div>
                        <div className="profile-skills-item">
                            <Icon name="message" className="icon-36" />
                        </div>

                        {/* <a href="https://wa.me/27818557323?text=I'm%20interested%20in%20your%20car%20for%20sale">Whatsapp Me</a> */}
                    </div>
                    <div className="scroll-indicator">
                        <Icon name="keyboard_arrow_down" className="icon-48" />
                    </div>
                </div>
                <div className="intro">
                    <blockquote>
                        I'm just a guy, sitting in front of a screen, looking for a missing semi-colon.
                    </blockquote>
                    <br></br>
                    <p>I am an energetic and determined individual and driven developer. I have experience working on large development projects with multiple teams, both small and large. I enjoy learning from those I work with and producing work that challenges both the industry, as well as myself. I aim to continue to grow as a front-end developer by keeping up to date with the latest technologies and frameworks. After recently dipping my toe into full-stack development, I am excited at the prospect of branching into more back-end roles. </p>
                </div>
            </main>
        </Fragment>
    );
};

export default Profile;
