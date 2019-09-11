import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  padding: 1rem;
  border-radius: 30px 30px 30px 0;
  width: fit-content;
  background: #ce4948;
`

const Text = styled.p`
  color: white;
  margin: 0;
`

const QuestionBubble = ({ label }) => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  )
}

export default QuestionBubble
