import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaAmazon, FaApple, FaGraduationCap } from "react-icons/fa";
import { withRouter } from "react-router-dom";

import "./assets/css/landing-page.min.css";

class Landing extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/shoppingList");
    }
  }

  learnMoreAction = () => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <div>
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Shopping list!</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto" />
            </div>
          </div>
        </header>

        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">This app is awesome...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div className="landing-icon">
                    <FaApple />
                  </div>
                  <h5>Better than Apple</h5>
                  <p className="font-weight-light mb-0">
                    Apple won't remind you to buy apple in your grocery store. Our app can do it!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div className="landing-icon">
                    <FaAmazon />
                  </div>
                  <h5>Not supported by Amazon</h5>
                  <p className="font-weight-light mb-0">
                    Our app is independent and not supported by amazon and other big companies.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div className="landing-icon">
                    <FaGraduationCap />
                  </div>
                  <h5>We support students!</h5>
                  <p className="font-weight-light mb-0">
                    Students with ID recieve 99% off on our app purchase. The app is free, but we hope you appreciate the discount!  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              condimentum nulla urna, non egestas felis lacinia ut. Ut molestie
              molestie justo sed laoreet. Maecenas volutpat nisi in quam aliquam
              vehicula. In non dolor vestibulum elit tristique blandit. Sed
              fringilla odio lorem, quis vestibulum dui dapibus sed. Mauris
              feugiat sem vel dui rhoncus, id placerat ipsum tempor. Maecenas id
              neque magna. Nam hendrerit ultricies lacus, ac placerat nulla
              vehicula eu. Proin placerat fermentum orci vitae tristique.
              Vivamus lectus ipsum, molestie nec ligula ut, auctor luctus massa.
              Donec aliquet leo odio, ut dignissim est consectetur nec.
            </p>
          </div>
        </section>

        <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Sign up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="http://github.com/vegetablecode"> vegetablecode</a>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Landing));
