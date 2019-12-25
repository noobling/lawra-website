export default [
  {
    id: "moneyOptions",
    options: [
      {
        value: 1,
        label: "Borrowing money and debt",
        trigger: "NSCLS",
      },
      {
        value: 2,
        label: "Centrelink/Welfare Payments",
        trigger: "Peel",
      },
      {
        value: 3,
        label: "Elder Abuse",
        trigger: "Peel&NSCLS",
      },
      {
        value: 4,
        label: "Fines and infrigements",
        trigger: "Peel&NSCLS",
      },
      {
        value: 5,
        label: "Going to court over money",
        trigger: "NSCLS",
      },
      {
        value: 6,
        label: "Identity theft",
        trigger: "",
      },
      {
        value: 7,
        label: "Natural disasters",
        trigger: "",
      },
      {
        value: 8,
        label: "Work related payments",
        trigger: "elsEligibilityEmploymentSituation",
      },
      {
        value: 9,
        label: "Criminal Injuries Compensation Scheme",
        trigger: "Peel&NSCLS",
      },
    ],
  },
]
