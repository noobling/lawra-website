export default [
  {
    id: "peelEligibilityLocation",
    question: "What is your postcode",
    type: "input",
    rule: "match 6210",
    pass: "peelEligibilityIncome",
    fail: "ineligible",
  },
  {
    id: "peelEligibilityIncome",
    question: "What is your income",
    options: [
      { value: 1, label: "Under $50,000", trigger: "Peel" },
      { value: 2, label: "Over $50,000", trigger: "ineligible" },
    ],
  },
]
