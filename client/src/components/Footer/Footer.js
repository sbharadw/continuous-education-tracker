import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer bg="dark" className="footer ">
        <Container fluid>
          {/* <!-- Copyright --> */}
          <div class="col-md-12 col-sm-12 col-xs-12 text-center py-2  text-dark">
            © 2021 Copyright:TeamHulk
          </div>
          {/* <!-- End Copyright --> */}
        </Container>
      </footer>
    );
  }
}

export default Footer;
