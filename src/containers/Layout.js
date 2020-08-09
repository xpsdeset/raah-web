import React from "react"
import { Notifications } from "modules/notification"
import Navbar from "./Navbar"
import Footer from "./Footer"

function CoreLayout({ children, ...props }) {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "500px" }}>{children}</div>
      <Notifications />
      <Footer />
    </div>
  )
}

export default CoreLayout
