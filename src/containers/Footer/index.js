import React from "react"
import { Link } from "react-router-dom"

let Footer = () => {
  return (
    <footer className="container text-center">
      <div className="footerMainWrapper">
        <hr />
        {/* Footer- end section */}
        <div className="row mb-3">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left">
            <span className="footerEndSectionStyle">
              <Link className="footerEndSectionStyle" to="/privacy">
                Privacy Policy
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left">
            <span className="footerEndSectionStyle">
              <span className="contactUsTitle">
                <i className="fas fa-envelope" /> support@raah.app
              </span>{" "}
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
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
