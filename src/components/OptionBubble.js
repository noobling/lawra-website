import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  padding: 1rem;
  border-radius: 30px;
`

const Text = styled.p`
  margin: 0;
`

const OptionBubble = ({ option, onOptionClick, ...props }) => {
  return (
    <Container {...props} onClick={() => onOptionClick(option)}>
      <Text>{option.label}</Text>
    </Container>
  )
}

export default OptionBubble
