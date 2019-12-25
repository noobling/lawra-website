export default [
  {
    id: "cclswaEligibilityLocation",
    rule: "match 6160",
    question: "What is your postcode?",
    type: "input",
    pass: "cclswaEligibilityAge",
    fail: "ineligible",
  },
  {
    id: "cclswaEligibilityAge",
    question: "Are you over 18?",
    options: [
      { value: 1, label: "Yes", trigger: "CCLSWA" },
      {
        value: 2,
        label: "No",
        trigger: "ineligible",
      },
    ],
  },
]
