import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          {/* <!-- Copyright --> */}
          <div className="col-md-12 col-sm-12 col-xs-12 text-center py-1  text-dark">
            © 2021 Copyright:TeamHulk
          </div>
          {/* <!-- End Copyright --> */}
        </Container>
      </footer>
    );
  }
}

export default Footer;
