import React from "react"
import NSCLS from "../components/clcs/NSCLS"
import Peel from "../components/clcs/Peel"
import ELS from "../components/clcs/ELS"
import CCLSWA from "../components/clcs/CCLSWA"
import Ineligible from "../components/clcs/Ineligible"
import money from "./money"
import family from "./family"
import home from "./home"
import crime from "./crime"
import cars from "./cars"
import willsAndEstates from "./willsAndEstates"
import affairs from "./affairs"
import health from "./health"
import injury from "./injury"
import work from "./work"
import rights from "./rights"
import bully from "./bully"
import elder from "./elder"
import youngPeople from "./youngPeople"
import law from "./law"
import product from "./product"
import elsEligibility from "./elsEligibility"
import peelEligibility from "./peelEligibility"
import NSCLSEligibility from "./NSCLSEligibility"

export default [
  {
    id: "initOptions",
    question: "What is your legal problem?",
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
        trigger: "workOptions",
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
  ...money,
  ...cars,
  ...family,
  ...crime,
  ...home,
  ...willsAndEstates,
  ...affairs,
  ...health,
  ...injury,
  ...work,
  ...rights,
  ...bully,
  ...elder,
  ...youngPeople,
  ...law,
  ...product,
  ...elsEligibility,
  ...peelEligibility,
  ...NSCLSEligibility,
  {
    id: "ineligible",
    component: <Ineligible />,
    end: true,
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
