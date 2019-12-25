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

const OptionBubbles = ({ options, onOptionClick, highlightedOptions = [] }) => {
  return (
    <Container>
      {options.map(option => {
        const highlighted = highlightedOptions.some(
          value => value === option.value
        )

        return (
          <StyledOptionBubble
            key={option.label}
            option={option}
            onOptionClick={onOptionClick}
            highlighted={highlighted}
          />
        )
      })}
    </Container>
  )
}

export default OptionBubbles
