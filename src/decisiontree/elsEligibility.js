export default [
  {
    id: "elsEligibilityEmploymentSituation",
    options: [
      {
        value: 1,
        label: "Contractor",
        trigger: "ineligible",
      },
      {
        value: 2,
        label: "Employer",
        trigger: "ineligible",
      },
      { value: 3, label: "Union member", trigger: "ineligible" },
      {
        value: 4,
        label: "Employee not in Union",
        trigger: "elsEligibilityPersonalIncome",
      },
    ],
  },
  {
    id: "elsEligibilityPersonalIncome",
    options: [
      { value: 1, label: "Under $50,000", trigger: "ELS" },
      { value: 2, label: "$50,000 - $70,000", trigger: "ELS" },
      { value: 3, label: "$100,000", trigger: "" },
    ],
  },
]
