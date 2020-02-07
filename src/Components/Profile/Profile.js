import React, { Component } from "react";
import Axios from "axios";
import classes from "./Profile.module.css";
import Loader from "../Loader/Loader";

class Profile extends Component {
  state = {
    profile: null,
    isLoading: true
  };
  componentDidMount() {
    let nameClicked = this.props.match.params.name;
    let URL = `https://api.hnpwa.com/v0/user/${nameClicked}.json`;
    Axios.get(URL)
      .then(response => {
        this.setState({
          profile: response,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.profile && this.state.profile.data) {
      let profile = this.state.profile.data;

      var name = profile.id;
      var karma = profile.karma;
      var created = profile.created;
    }

    var display = (
      <div className={classes.Profile}>
          <table>
              <tbody>
                  <tr>
                      <td>User : </td>
                      <td>{name}</td>
                  </tr><tr>
                      <td>Created : </td>
                      <td>{created}</td>
                  </tr><tr>
                      <td>Karma : </td>
                      <td>{karma}</td>
                  </tr>
              </tbody>
          </table>
        
      </div>
    );
    return <div>{this.state.isLoading ? <Loader /> : display}</div>;
  }
}

export default Profile;
