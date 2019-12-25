export default [
  {
    id: "elderOptions",
    question: "Is this work related?",
    options: [
      {
        value: 1,
        label: "Yes",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 2,
        label: "No",
        trigger: "NSCLSEligibilityLocation",
      },
    ],
  },
]
