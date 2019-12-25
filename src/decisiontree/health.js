export default [
  {
    id: "healthOptions",
    options: [
      {
        value: 1,
        label: "Personal Injuries",
        trigger: "injuryOptions",
      },
      {
        value: 2,
        label: "Making medical decisions",
        trigger: "NSCLSEligibilityLocation",
      },
      {
        value: 3,
        label: "Mental health",
        trigger: "NSCLSEligibilityLocation",
      },
      {
        value: 4,
        label: "National Disability Insurance Scheme",
        trigger: "peelEligibilityLocation",
      },
      {
        value: 5,
        label: "Advanced Health Directive",
        trigger: "Peel&NSCLS",
      },
      {
        value: 6,
        label: "Criminal Injuries Compensation",
        trigger: "Peel&NSCLS",
      },
      {
        value: 7,
        label: "Occupational Health and Safety",
        trigger: "elsEligibilityEmploymentSituation",
      },
    ],
  },
]
