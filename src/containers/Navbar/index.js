import React from "react"
import { useSelector } from "react-redux"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { isLoaded, isEmpty } from "react-redux-firebase"
import { useFirebase } from "react-redux-firebase"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

function NavbarC() {
  // Get auth from redux state
  let history = useHistory()

  const firebase = useFirebase()
  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  function handleLogout() {
    return firebase.logout()
  }

  return (
    <>
      {!authExists && (
        <section
          className="
          elementor-section
          elementor-top-section
          elementor-element
          elementor-element-3f42f5e
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
          data-id="3f42f5e"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="
              elementor-column
              elementor-col-50
              elementor-top-column
              elementor-element
              elementor-element-ee6a432
            "
              data-id="ee6a432"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="
                  elementor-element
                  elementor-element-80ba7bb
                  elementor-widget
                  elementor-widget-image
                "
                  data-id="80ba7bb"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <a href="/">
                      <img
                        width="150"
                        height="150"
                        src="/images/logo1-150x150.png"
                        className="attachment-thumbnail size-thumbnail"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
              elementor-column
              elementor-col-50
              elementor-top-column
              elementor-element
              elementor-element-8ef66a4
            "
              data-id="8ef66a4"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="
                  elementor-element
                  elementor-element-fec4f26
                  elementor-shape-circle
                  elementor-grid-0
                  e-grid-align-center
                  elementor-widget ele-w-scial
                "
                  data-id="fec4f26"
                  data-element_type="widget"
                  data-widget_type="social-icons.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ele-scl-icons-wrapper elementor-grid">
                      <div className="elementor-grid-item">
                        <a
                          className="
                          elementor-icon
                          ele-scl-icon
                          ele-scl-icon-facebook-f
                          elementor-repeater-item-5e72ff2
                        "
                          href="https://www.facebook.com/RaahTheApp"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">
                            Facebook-f
                          </span>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="elementor-grid-item mx-2">
                        <a
                          className="
                          elementor-icon
                          ele-scl-icon
                          ele-scl-icon-twitter
                          elementor-repeater-item-64bac3f
                        "
                          href="https://twitter.com/raahtheapp"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Twitter</span>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                      <div className="elementor-grid-item">
                        <a
                          className="
                          elementor-icon
                          ele-scl-icon
                          ele-scl-icon-instagram
                          elementor-repeater-item-c1e088a
                        "
                          target="_blank"
                          href="https://www.instagram.com/raahtheapp/"
                        >
                          <span className="elementor-screen-only">
                            Instagram
                          </span>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {authExists && (
        <Navbar bg="light">
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title="Admin">
                <NavDropdown.Item
                  onClick={() => history.push("/admin/reports")}
                >
                  Reports
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  )
}

export default NavbarC
