import React from "react"
import { ProgressBar } from "react-bootstrap"

function LoadingSpinner() {
  return (
    <div className="container p-5">
      <ProgressBar
        striped
        variant="danger"
        now="100"
        animated
        style={{ width: "80%" }}
      />
    </div>
  )
}

export default LoadingSpinner
