import React from "react"
import NSCLS from "./components/clcs/NSCLS"
import Peel from "./components/clcs/Peel"
import ELS from "./components/clcs/ELS"
import CCLSWA from "./components/clcs/CCLSWA"

export default [
  {
    id: "intro",
    message: "What is your legal problem?",
  },
  {
    id: "initOptions",
    options: [
      { value: 1, label: "Family", trigger: "familyOptions" },
      { value: 2, label: "Money", trigger: "moneyOptions" },
      { value: 3, label: "Crime", trigger: "crimeOptions" },
      { value: 4, label: "Cars and Driving", trigger: "carsOptions" },
      {
        value: 5,
        label: "Homes and Neighbours",
        trigger: "homeOptions",
      },
      {
        value: 6,
        label: "Managing your affairs",
        trigger: "affairsOptions",
      },
      {
        value: 7,
        label: "My health",
        trigger: "healthOptions",
      },
      {
        value: 8,
        label: "Your work",
        trigger: "workOptions1",
      },
      {
        value: 9,
        label: "Your rights",
        trigger: "rightsOptions",
      },
      {
        value: 10,
        label: "Young people",
        trigger: "youngPeopleOptions",
      },
      {
        value: 11,
        label: "About the law",
        trigger: "lawOptions",
      },
      {
        value: 12,
        label: "A product or service I bought",
        trigger: "productOptions",
      },
    ],
  },
  {
    id: "familyOptions",
    options: [
      {
        value: 1,
        label: "Family violence and your safety",
        trigger: "Peel&NSCLS",
      },
      {
        value: 2,
        label: "Resolving family law disputes",
        trigger: "Peel&NSCLS",
      },
      {
        value: 3,
        label: "Separation and Divorce",
        trigger: "Peel&NSCLS",
      },
      { value: 4, label: "Child Custody", trigger: "Peel&NSCLS" },
      {
        value: 5,
        label: "Relocating with child",
        trigger: "Peel&NSCLS",
      },
      {
        value: 6,
        label: "Dividing Property and Possessions",
        trigger: "Peel&NSCLS",
      },
      { value: 7, label: "Child Support", trigger: "Peel" },
      {
        value: 8,
        label: "Restraining Orders",
        trigger: "Peel&NSCLS",
      },
      { value: 9, label: "Child Protection", trigger: "Peel&NSCLS" },
      { value: 10, label: "Elder Abuse", trigger: "Peel&NSCLS" },
      {
        value: 11,
        label: "Wills and Estate",
        trigger: "Wills&Estate",
      },
    ],
  },
  {
    id: "Wills&Estate",
    options: [
      { value: 1, label: "Wills" },
      { value: 2, label: "Estates", trigger: "NSCLS" },
    ],
  },
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
        trigger: "ELS",
      },
      {
        value: 9,
        label: "Criminal Injuries Compensation Scheme",
        trigger: "Peel&NSCLS",
      },
    ],
  },
  {
    id: "crimeOptions",
    options: [
      {
        value: 1,
        label: "Restraining Orders",
        trigger: "Peel&NSCLS",
      },
      {
        value: 2,
        label: "Fines and infringements",
        trigger: "Peel&NSCLS",
      },
      {
        value: 3,
        label: "Going to court for a criminal charge",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "Criminal records and spent convictions",
        trigger: "Peel&NSCLS",
      },
      {
        value: 5,
        label: "Traffic Offences",
        trigger: "Peel&NSCLS",
      },
      {
        value: 6,
        label: "Prisoner information",
        trigger: "NSCLS",
      },
      {
        value: 7,
        label: "Proceeds of crime - frozen assets",
        trigger: "NSCLS",
      },
      {
        value: 8,
        label: "Rehearing and appeals",
        trigger: "NSCLS",
      },
      {
        value: 9,
        label: "Under arrest and police powers",
        trigger: "NSCLS",
      },
      {
        value: 10,
        label: "Criminal Injuries Compensation",
        trigger: "Peel&NSCLS",
      },
    ],
  },
  {
    id: "carsOptions",
    options: [
      {
        value: 1,
        label: "Buying a Car",
        trigger: "NSCLS",
      },
      {
        value: 2,
        label: "Car and personal loans",
        trigger: "NSCLS",
      },
      {
        value: 3,
        label: "Car accidents",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "Driver's licences",
        trigger: "NSCLS",
      },
      {
        value: 5,
        label: "Traffic Offences",
        trigger: "Peel&NSCLS",
      },
    ],
  },
  {
    id: "homeOptions",
    options: [
      {
        value: 1,
        label: "Abandoned goods",
        trigger: "Peel&NSCLS",
      },
      {
        value: 2,
        label: "Building disputes",
        trigger: "",
      },
      {
        value: 3,
        label: "Dealing with neighbours",
        trigger: "Peel",
      },
      {
        value: 4,
        label: "Natural disasters",
        trigger: "",
      },
      {
        value: 5,
        label: "Owning property in WA",
        trigger: "",
      },
      {
        value: 6,
        label: "Property Damage",
        trigger: "NSCLS",
      },
      {
        value: 7,
        label: "Residential tenants",
        trigger: "Peel&NSCLS",
      },
    ],
  },
  {
    id: "affairsOptions",
    options: [
      {
        value: 1,
        label: "Changing names",
        trigger: "Peel&NSCLS",
      },
      {
        value: 2,
        label: "Guardianship and administration",
        trigger: "Peel&NSCLS",
      },
      {
        value: 3,
        label: "Powers of attorney",
        trigger: "Peel&NSCLS",
      },
      {
        value: 4,
        label: "Wills and estates",
        trigger: "Wills&Estate",
      },
    ],
  },
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
        trigger: "NSCLS",
      },
      {
        value: 3,
        label: "Mental health",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "National Disability Insurance Scheme",
        trigger: "Peel",
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
        trigger: "ELS",
      },
    ],
  },
  {
    id: "injuryOptions",
    options: [
      {
        value: 1,
        label: "Workplace Injury/Workplace Compensation",
        trigger: "",
      },
      {
        value: 2,
        label: "Traffic Accident Injury",
        trigger: "Peel&NSCLS",
      },
      {
        value: 3,
        label: "Making medical decisions",
        trigger: "NSCLS",
      },
    ],
  },
  {
    id: "workOptions1",
    message: "What best describes your situation?",
    trigger: "workOptions2",
  },
  {
    id: "workOptions2",
    options: [
      { value: 1, label: "Contractor", trigger: "" },
      { value: 2, label: "Employer", trigger: "" },
      { value: 3, label: "Union member", trigger: "" },
      {
        value: 4,
        label: "Employee not in a Union",
        trigger: "workOptions3",
      },
    ],
  },
  {
    id: "workOptions3",
    options: [
      {
        value: 1,
        label: "Discrimination, harassment and bullying or equal opportunity",
        trigger: "ELS",
      },
      {
        value: 2,
        label: "Pay and conditions (not superannution)",
        trigger: "ELS",
      },
      {
        value: 3,
        label: "Losing your job",
        trigger: "ELS",
      },
      {
        value: 4,
        label: "Workplace Injury/Workers Compensation",
        trigger: "",
      },
      {
        value: 5,
        label: "Occupational Health and Safety/ Workplace Conditions",
        trigger: "ELS",
      },
      {
        value: 6,
        label: "My employment contract or rights under law",
        trigger: "ELS",
      },
    ],
  },
  {
    id: "rightsOptions",
    options: [
      {
        value: 1,
        label: "Complaints and consumers",
        trigger: "NSCLS",
      },
      {
        value: 2,
        label: "Discrimination, harassment and bullying",
        trigger: "bully1",
      },
      {
        value: 3,
        label: "Elder abuse",
        trigger: "elder1",
      },
      {
        value: 4,
        label: "Immigration",
        trigger: "",
      },
      {
        value: 5,
        label: "Privacy and Freedom of Information",
        trigger: "NSCLS",
      },
      {
        value: 6,
        label: "Under arrest and police powers",
        trigger: "NSCLS",
      },
      {
        value: 7,
        label: "Young people",
        trigger: "NSCLS",
      },
    ],
  },
  {
    id: "bully1",
    message: "Work related?",
    trigger: "bullyOptions",
  },
  {
    id: "bullyOptions",
    options: [
      {
        value: 1,
        label: "Yes",
        trigger: "ELS",
      },
      {
        value: 2,
        label: "No",
        trigger: "NSCLS",
      },
    ],
  },
  {
    id: "elder1",
    message: "Is this work related?",
    trigger: "elderOptions",
  },
  {
    id: "elderOptions1",
    options: [
      {
        value: 1,
        label: "Yes",
        trigger: "ELS",
      },
      {
        value: 2,
        label: "No",
        trigger: "NSCLS",
      },
    ],
  },
  {
    id: "youngPeopleOptions",
    options: [
      {
        value: 1,
        label: "Leavers",
        trigger: "",
      },
      {
        value: 2,
        label: "Sex and the law",
        trigger: "NSCLS",
      },
      {
        value: 3,
        label: "Your rights",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "Police and the Courts",
        trigger: "NSCLS",
      },
      {
        value: 5,
        label: "Work Related",
        trigger: "ELS",
      },
    ],
  },
  {
    id: "lawOptions",
    options: [
      {
        value: 1,
        label: "Going to court",
        trigger: "NSCLS",
      },
      {
        value: 2,
        label: "Mediation and dispute resolution",
        trigger: "NSCLS",
      },
      {
        value: 3,
        label: "Negotiation",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "Other ways to sort it out",
        trigger: "NSCLS",
      },
      {
        value: 5,
        label: "Tips for hiring a private lawyer",
        trigger: "",
      },
    ],
  },
  {
    id: "productOptions",
    options: [
      {
        value: 1,
        label: "Car",
        trigger: "NSCLS",
      },
      {
        value: 2,
        label: "Other product",
        trigger: "NSCLS",
      },
      {
        value: 3,
        label: "Other service",
        trigger: "NSCLS",
      },
      {
        value: 4,
        label: "Phone",
        trigger: "NSCLS",
      },
    ],
  },
  {
    id: "Peel",
    component: <Peel />,
    end: true,
  },
  {
    id: "NSCLS",
    component: <NSCLS />,
    end: true,
  },
  {
    id: "CCLSWA",
    component: <CCLSWA />,
    end: true,
  },
  {
    id: "Peel&NSCLS",
    component: (
      <>
        <Peel />
        <br />
        <NSCLS />
      </>
    ),
    end: true,
  },
  {
    id: "ELS",
    component: <ELS />,
    end: true,
  },
]
