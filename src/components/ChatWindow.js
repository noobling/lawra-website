import css from "@emotion/css"
import styled from "@emotion/styled"
import React, { useState, useEffect } from "react"
import QuestionBubble from "../components/QuestionBubble"
import decisiontree from "../decisiontree"
import OptionBubbles from "./OptionBubbles"
import ResponseBubble from "./ResponseBubble"

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

const getItem = id => {
  return decisiontree.find(item => item.id === id)
}

const ChatWindow = () => {
  const [currentOptions, setCurrentOptions] = useState(getItem("initOptions"))
  const [isEnded, setIsEnded] = useState(false)
  const [history, setHistory] = useState([
    { type: "question", ...getItem("intro") },
  ])

  const onOptionClick = option => {
    // Add user chosen option to history
    setHistory([...history, { ...option, type: "response" }])
    // Get next item to display back to user
    const nextItem = getItem(option.trigger)
    if (!nextItem) {
      // TODO: handle when no next option is available
      alert("missing this part of the decision tree")
    }
    // Check if next item is the last item
    else if (nextItem.end) {
      setCurrentOptions(nextItem)
      setIsEnded(true)
    }
    // Check if next item is a question
    else if (nextItem.message) {
      // Ask the question
      setHistory([...history, { ...nextItem, type: "question" }])
      // Present the options to the user
      setCurrentOptions(getItem(nextItem.trigger))
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
    setIsEnded(false)
    setCurrentOptions(getItem("initOptions"))
    setHistory([{ type: "question", ...getItem("intro") }])
  }

  return (
    <Container>
      {history.map((item, index) => {
        return item.type === "question" ? (
          <QuestionBubble key={index} label={item.message} />
        ) : (
          <ResponseBubble
            css={css`
              margin-left: auto;
            `}
            key={index}
            response={item}
          />
        )
      })}

      {isEnded ? (
        <>
          <AnswerContainer
            css={css`
              margin-top: 2rem;
            `}
          >
            {currentOptions.component}
          </AnswerContainer>
          <Button
            css={css`
              margin-left: auto;
            `}
            onClick={() => reset()}
          >
            Restart
          </Button>
        </>
      ) : (
        <OptionBubbles
          options={currentOptions.options}
          onOptionClick={onOptionClick}
        />
      )}
    </Container>
  )
}

export default ChatWindow
