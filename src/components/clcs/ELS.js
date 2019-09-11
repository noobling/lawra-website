import React from "react"
import Base from "./Base"

const ELS = () => {
  return (
    <Base
      link="https://elcwa.org.au/contact-us/"
      linkMessage="Website: https://elcwa.org.au/contact-us/"
      phoneMessage={
        <>
          Call ELS here: <b>(08) 9227 0111</b>
        </>
      }
    />
  )
}

export default ELS
