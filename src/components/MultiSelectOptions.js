import React from "react"
import OptionBubbles from "./OptionBubbles"

export default function MultiSelectOptions({
  value,
  multiSelectValues,
  setMultiSelectValues,
}) {
  const handleOptionClick = option => {
    setMultiSelectValues(_multiSelectValues => {
      if (_multiSelectValues.some(value => value === option.value)) {
        return _multiSelectValues.filter(value => value !== option.value)
      } else {
        return [..._multiSelectValues, option.value]
      }
    })
  }

  return (
    <OptionBubbles
      options={value.options}
      onOptionClick={handleOptionClick}
      highlightedOptions={multiSelectValues}
    />
  )
}
