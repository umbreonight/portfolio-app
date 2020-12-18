import React, { Fragment, useState } from "react";
import { Loading, AppBar } from "components";

const Welcome = props => {
    const [loading] = useState(false);

    if (!!loading) {
        return <Loading />;
    }

    return (
        <Fragment>
            <AppBar />
            <main>
                <div className="welcome">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 col-sm-offset-1">
                                <div className="page-content">
                                    <h3 className="section-title">Hi I'm Darren</h3>
                                    <hr className="divider"></hr>
                                    <p>Since beginning my journey as a front end developer in 2015, I've worked for agencies as well as large corporates, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and and always willing to learn something I never knew I never knew.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Welcome;
