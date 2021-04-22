import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgStyle: { backgroundColor: "#f5f5f5" }
    };
  }
  render() {
    return (
      <footer style={this.state.bgStyle} className=" mt-auto py-3 text-center">
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <a
          className=" badge badge-dark"
          target="noopener"
          href={"https://github.com/Gauthamjm007"}
        >
          Goutham JM
        </a>{" "}
        using <i className="fab fa-react"></i>
      </footer>
    );
  }
}

export default Footer;
