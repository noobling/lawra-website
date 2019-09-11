import React from "react"
import styled from "@emotion/styled"
import ResponseBubble from "./ResponseBubble"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ResponseBubbles = ({ responses }) => {
  return (
    <Container>
      {responses.map(response => (
        <ResponseBubble key={response.label} response={response} />
      ))}
    </Container>
  )
}

export default ResponseBubbles
