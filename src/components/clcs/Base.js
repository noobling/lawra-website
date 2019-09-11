import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Base = ({ phoneMessage, link, linkMessage }) => {
  return (
    <Container>
      <div style={{ marginBottom: "1rem" }}>{phoneMessage}</div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkMessage}
      </a>
    </Container>
  )
}

export default Base
