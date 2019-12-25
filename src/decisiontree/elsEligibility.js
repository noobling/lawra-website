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
      { value: 3, label: "$100,000", trigger: "elsEligibilityPersonalInfo" },
    ],
  },
  {
    id: "elsEligibilityPersonalInfo",
    type: "multiselect",
    question: "Do any of the following apply to you? Select all that apply",
    options: [
      { value: 1, label: "I am sole income earner" },
      { value: 2, label: "I have dependants" },
      { value: 3, label: "I am from a non-English speaking background" },
      { value: 4, label: "I am under age of 21 or over the age of 55" },
      {
        value: 5,
        label: "I am of Aboriginal and Torres Strait Islander decent",
      },
      { value: 6, label: "I have a mental or physical disability" },
      { value: 7, label: "I experience literacy issues" },
      { value: 8, label: "I am from a regional/rural/remote area" },
      { value: 9, label: "I am an apprentice/trainee" },
      { value: 10, label: "I am on a temporary work visa (457 or 417 visa)" },
    ],
    rule: "2 or more",
    pass: "ELS",
    fail: "ineligible",
  },
]
