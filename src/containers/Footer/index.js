import React from "react"
import { Link } from "react-router-dom"

let Footer = () => {
  return (
    <footer className="container text-center">
      <div>
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
      </div>
    </footer>
  )
}

export default Footer
