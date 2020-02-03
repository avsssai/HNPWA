import React from "react";
import classes from "./Toolbar.module.css";
import ToolbarItem from "../../Components/ToolbarItem/ToolbarItem";
import { NavLink } from "react-router-dom";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <NavLink to="/top" style={{ textDecoration: "none" }}>
        <div className={classes.Logo}>HackerNews</div>
      </NavLink>
      {/* <div className={classes.Logo}>HackerNews</div> */}

      <div className={classes.Items}>
        <NavLink
          to="/top"
          style={{ textDecoration: "none" }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white",
            marginBottom: "2px"
          }}
        >
          <ToolbarItem className={classes.Item} category="Top" />
        </NavLink>
        <NavLink
          to="/newest"
          style={{ textDecoration: "none" }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white",
            marginBottom: "2px"
          }}
        >
          <ToolbarItem className={classes.Item} category="Newest" />
        </NavLink>
        <NavLink
          to="/ask"
          style={{ textDecoration: "none" }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white",
            marginBottom: "2px"
          }}
        >
          <ToolbarItem className={classes.Item} category="Ask" />
        </NavLink>
        <NavLink
          to="/show"
          style={{ textDecoration: "none" }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white",
            marginBottom: "2px"
          }}
        >
          <ToolbarItem className={classes.Item} category="Show" />
        </NavLink>
        <NavLink
          to="/jobs"
          style={{ textDecoration: "none" }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white",
            marginBottom: "2px"
          }}
        >
          <ToolbarItem className={classes.Item} category="Jobs" />
        </NavLink>
      </div>
    </div>
  );
};
export default Toolbar;
