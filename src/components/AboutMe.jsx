import React, { Component } from "react";
import Configs from "../configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "About me",
      aboutDev: Configs.aboutDev,
      instaProfilePic: "bad request"
    };
  }
  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = (e) => {
    axios
      .get(Configs.instaLink + Configs.instaUsername + Configs.instaQuerry)
      .then((response) => {

        this.setState({
          instaProfilePic: response.data.graphql.user.profile_pic_url_hd
        });
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {

      });
  };

  render() {
    return (
      <div id="divaboutme" className="jumbotron jumbotron-fluid m-0">
        <div className=" container container-fluid p-5">
          <div className="row">
            <div className=" col-5 d-none d-lg-block align-self-center">
              <img
                className="border-secondary rounded-circle"
                src="https://i.ibb.co/R4htZB1/circle-cropped.png"
                alt="profilepicture"
              ></img>
            </div>
            <div className=" col-lg-7">
              <h1 className="display-4 mb-5 text-left">
                {this.state.heading}
              </h1>
              <p className=" lead text-left">{this.state.aboutDev}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
