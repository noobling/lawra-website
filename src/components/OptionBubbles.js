import styled from "@emotion/styled"
import React from "react"
import OptionBubble from "./OptionBubble"

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
`

const StyledOptionBubble = styled(props => <OptionBubble {...props} />)`
  margin: 0.25rem;
`

const OptionBubbles = ({ options, onOptionClick }) => {
  return (
    <Container>
      {options.map(option => (
        <StyledOptionBubble
          key={option.label}
          option={option}
          onOptionClick={onOptionClick}
        />
      ))}
    </Container>
  )
}

export default OptionBubbles
