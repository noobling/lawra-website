import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  padding: 1rem;
  border-radius: 30px 30px 0 30px;
  width: fit-content;
  background: #1a5980;
`

const Text = styled.p`
  margin: 0;
  color: white;
`

const ResponseBubble = ({ response, ...props }) => {
  return (
    <Container {...props}>
      <Text>{response.label}</Text>
    </Container>
  )
}

export default ResponseBubble
