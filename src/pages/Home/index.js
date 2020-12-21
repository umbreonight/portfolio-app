import React, { Fragment, useState } from "react";
import { Loading, AppBar } from "components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = (props) => {
  const [loading] = useState(false);

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <AppBar />
      <main role="main">
        <h3>Portfolio App</h3>
        <div className="link-group">
        <Link to="/welcome">Welcome</Link>
        <Link to="/hub">Hub</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
