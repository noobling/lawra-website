export default [
  {
    id: "NSCLSEligibilityLocation",
    type: "input",
    question: "What is your postcode?",
    rule: "in",
    in: [
      "6000",
      "6004",
      "6892",
      "6002",
      "6006",
      "6001",
      "7300",
      "6848",
      "6846",
      "6838",
    ],
    pass: "NSCLSEligibilityIncome",
    fail: "ineligible",
  },
  {
    id: "NSCLSEligibilityIncome",
    question: "What is your income",
    options: [
      { value: 1, label: "I don't earn any income", trigger: "NSCLS" },
      { value: 2, label: "Less than $65,000", trigger: "NSCLS" },
      {
        value: 3,
        label: "Greater than $65,000",
        trigger: "NSCLSEligibilityIncomePersonalInfo",
      },
    ],
  },
  {
    id: "NSCLSEligibilityIncomePersonalInfo",
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
    pass: "NSCLS",
    fail: "ineligible",
  },
]
