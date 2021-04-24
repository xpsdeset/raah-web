import React from "react"
import { Link } from "react-router-dom"

let Footer = () => {
  return (
    <footer className="container text-center">
      {/* <div>
        <div className="row">
          <div className="col-md-4 col-lg-3 mr-auto my-md-1 my-0 ">
            <span className="mb-1">© 2020 Raah.app</span>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-2 col-lg-2 mx-auto my-md-1 my-0 ">
            <h5 className="font-weight-bold text-uppercase mb-1">About</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <Link to="/privacy">Privacy Policy</Link>
                </p>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-3 mx-auto my-md-1 my-0 ">
            <h5 className="font-weight-bold text-uppercase mb-1">Contact us</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-envelope" /> support@raah.app
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-lg-2 text-center mx-auto my-md-1">
            <h5 className="font-weight-bold text-uppercase mb-1">Follow Us</h5>
            <a href="https://www.instagram.com/raahtheapp" target="_blank">
              <img src="/images/instagram.png" style={{ width: "20px" }} />
            </a>
          </div>
        </div>
      </div> */}
      {/* Footer-Main_wrapper */}
      <div className="footerMainWrapper mt-2">
        <div className="row ">
          {/* Section- Get The APP */}
          <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
            <div className="footerTitleWrapper mb-1 d-none">
              <span className="footerTitle">GET THE APP!</span>
            </div>
            <div className="footerTitleValuesWrapper mb-1 ">
              <a href="/get-android" target="_blank">
                <img src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" />
              </a>
              {/* TODO: Add path to IOS instructions */}
              {/* <a href="https://www.youtube.com/" target="_blank">
                <img className="ios-image" src="/images/download-ios.png" />
              </a> */}
            </div>
          </div>
          {/* Section- Follow us on Social */}
          <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
            <div className="footerTitleWrapper mb-1">
              <span className="footerTitle">FOLLOW US</span>
            </div>
            <div className="footerTitleValuesWrapper mb-1">
              <a href="https://www.facebook.com/RaahTheApp" target="_blank">
                <img
                  className="followUsImage"
                  src="/images/fb-circle-log.png"
                />
              </a>
              <a href="https://www.instagram.com/raahtheapp" target="_blank">
                <img
                  className="followUsImage"
                  src="/images/insta-circle-logo.png"
                />
              </a>
              <a href="https://www.t.me/raahtheapp/" target="_blank">
                <img
                  className="followUsImage"
                  src="/images/telegram-logo.png"
                />
              </a>
            </div>
          </div>
          {/* Section- Contact us */}
          <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
            <div className="footerTitleWrapper mb-1">
              <span className="footerTitle">CONTACT US</span>
            </div>
            <div className="footerTitleValuesWrapper mb-1">
              <span className="contactUsTitle">
                <i className="fas fa-envelope" /> support@raah.app
              </span>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* Footer- end section */}
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left">
            <span className="footerEndSectionStyle">
              <Link className="footerEndSectionStyle" to="/privacy">
                FAQ
              </Link>
              /{" "}
              <Link className="footerEndSectionStyle" to="/privacy">
                Privacy Policy
              </Link>
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="footerEndSectionStyle mb-1 appLinkText">
              © 2020 Raah.app
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
