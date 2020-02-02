import React from "react";
import classes from "./Toolbar.module.css";
import ToolbarItem from "../../Components/ToolbarItem/ToolbarItem";
import { Link } from "react-router-dom";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <div className={classes.Logo}>HackerNews</div>
      </Link>
      {/* <div className={classes.Logo}>HackerNews</div> */}

      <div className={classes.Items}>
        <Link to="/top" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Top" />
        </Link>
        <Link to="/newest" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Newest" />
        </Link>
        <Link to="/ask" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Ask" />
        </Link>
        <Link to="/show" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Show" />
        </Link>
        <Link to="/jobs" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Jobs" />
        </Link>

      </div>
    </div>
  );
};
export default Toolbar;
