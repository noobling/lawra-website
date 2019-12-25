import css from "@emotion/css"
import styled from "@emotion/styled"
import React, { useState, useEffect } from "react"
import QuestionBubble from "../components/QuestionBubble"
import decisiontree from "../decisiontree"
import OptionBubbles from "./OptionBubbles"
import ResponseBubble from "./ResponseBubble"
import MultiSelectOptions from "./MultiSelectOptions"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  > * {
    margin: 0.5rem;
  }
`

const AnswerContainer = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  padding: 1rem;
  border-radius: 30px;
  width: fit-content;
  background: #e28c49;
  color: white;
`

const Button = styled.button`
  background: #e28c49;
  border-radius: 30px;
  border: 4px solid #e28c49;
  color: white;
  padding: 1rem 2rem;
  width: fit-content;
  &:hover {
    background: white;
    color: black;
  }
`

const StyledQuestionBubble = styled(props => <QuestionBubble {...props} />)`
  margin: 0 0 1rem 0;
`

const getItem = id => {
  return decisiontree.find(item => item.id === id)
}

const ChatWindow = () => {
  const [currentOptions, setCurrentOptions] = useState(getItem("initOptions"))
  const [history, setHistory] = useState([])
  const [multiSelectValues, setMultiSelectValues] = useState([])

  const onOptionClick = async option => {
    // Add user chosen option to history
    setHistory(_history => [
      ..._history,
      { currentOptions, selectedOption: option },
    ])

    // Get next item to display back to user
    const nextItem = getItem(option.trigger)
    if (!nextItem) {
      // TODO: handle when no next option is available
      alert("missing this part of the decision tree")
    }
    // Present options to the user
    else {
      setCurrentOptions(nextItem)
    }
  }

  // We always want to be at the bottom of the chat window
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })

  const reset = () => {
    setCurrentOptions(getItem("initOptions"))
    setHistory([])
    setMultiSelectValues([])
  }

  const multiSelectNext = () => {
    if (currentOptions.rule === "2 or more" && multiSelectValues.length >= 2) {
      const selectedOptions = currentOptions.options.filter(option =>
        multiSelectValues.find(value => option.value === value)
      )

      const label = selectedOptions.reduce(
        (acc, option) => `${acc}${acc ? ", " : ""}${option.label}`,
        ""
      )
      onOptionClick({ trigger: currentOptions.pass, label })
    } else {
      onOptionClick({ trigger: currentOptions.fail })
    }
  }

  return (
    <Container>
      {history.map((item, index) => {
        return (
          <span key={index}>
            {item.currentOptions.question && (
              <StyledQuestionBubble label={item.currentOptions.question} />
            )}

            <ResponseBubble
              css={css`
                margin-left: auto;
              `}
              response={item.selectedOption}
            />
          </span>
        )
      })}

      {currentOptions.question && (
        <QuestionBubble label={currentOptions.question} />
      )}

      {currentOptions.end && (
        <AnswerContainer
          css={css`
            margin-top: 2rem;
          `}
        >
          {currentOptions.component}
        </AnswerContainer>
      )}

      {!currentOptions.end && currentOptions.type === "multiselect" && (
        <>
          <MultiSelectOptions
            value={currentOptions}
            multiSelectValues={multiSelectValues}
            setMultiSelectValues={setMultiSelectValues}
          />
          <Button
            css={css`
              margin-left: auto;
            `}
            onClick={multiSelectNext}
          >
            Next
          </Button>
        </>
      )}

      {!currentOptions.end && currentOptions.type !== "multiselect" && (
        <OptionBubbles
          options={currentOptions.options}
          onOptionClick={onOptionClick}
        />
      )}

      <Button
        css={css`
          margin-left: auto;
        `}
        onClick={reset}
      >
        Restart
      </Button>
    </Container>
  )
}

export default ChatWindow
