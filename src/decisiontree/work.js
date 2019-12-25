export default [
  {
    id: "workOptions",
    question: "What best describes your situation?",
    options: [
      { value: 1, label: "Contractor", trigger: "" },
      { value: 2, label: "Employer", trigger: "" },
      { value: 3, label: "Union member", trigger: "" },
      {
        value: 4,
        label: "Employee not in a Union",
        trigger: "workOptions1",
      },
    ],
  },
  {
    id: "workOptions1",
    options: [
      {
        value: 1,
        label: "Discrimination, harassment and bullying or equal opportunity",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 2,
        label: "Pay and conditions (not superannution)",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 3,
        label: "Losing your job",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 4,
        label: "Workplace Injury/Workers Compensation",
        trigger: "",
      },
      {
        value: 5,
        label: "Occupational Health and Safety/ Workplace Conditions",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 6,
        label: "My employment contract or rights under law",
        trigger: "elsEligibilityEmploymentSituation",
      },
    ],
  },
]
