import React from "react";
import Loadable from "@loadable/component";
import { Loading } from "../components";

export const Home = Loadable(
  () => import(/* webpackChunkName: "Home" */ "./Home"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Welcome = Loadable(
  () => import(/* webpackChunkName: "Welcome" */ "./Welcome"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Hub = Loadable(
  () => import(/* webpackChunkName: "Hub" */ "./Hub"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Education = Loadable(
  () => import(/* webpackChunkName: "Education" */ "./Education"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Experience = Loadable(
  () => import(/* webpackChunkName: "Experience" */ "./Experience"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Profile = Loadable(
  () => import(/* webpackChunkName: "Profile" */ "./Profile"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);

export const Projects = Loadable(
  () => import(/* webpackChunkName: "Projects" */ "./Projects"),
  {
    fallback: <Loading />, // only shown if loading takes more than 250 ms
  }
);
