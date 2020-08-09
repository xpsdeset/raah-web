import React from "react"
import { FormattedDateParts, FormattedTime } from "react-intl"
import Spinner from "./LoadingSpinner"

export const FormatDate = ({ date }) => {
  date = new Date(date)
  return (
    <>
      <FormattedDateParts value={date} month="short" day="numeric">
        {(parts) => (
          <b>
            {parts[2].value} {parts[0].value}{" "}
          </b>
        )}
      </FormattedDateParts>
      <FormattedTime value={date} />
    </>
  )
}

export { Spinner }
