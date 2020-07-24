import React from "react"
import { useSelector } from "react-redux"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { isLoaded, isEmpty } from "react-redux-firebase"
import { useFirebase } from "react-redux-firebase"
import { Link } from "react-router-dom"

function NavbarC() {
  // Get auth from redux state
  const firebase = useFirebase()
  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  function handleLogout() {
    return firebase.logout()("/")
  }

  function handleReports() {
 
    return ("/admin")
  }

  return (
    <Navbar bg="light">
      <Navbar.Brand>
        <Link to="/">
          <img src="/images/logo2.png" alt=""/>
        </Link>
      </Navbar.Brand>
      {authExists && (
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Admin">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              <NavDropdown.Item onClick={handleReports}>Reports</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

export default NavbarC
