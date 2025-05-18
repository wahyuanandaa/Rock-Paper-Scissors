import { createRef } from "react"
import Triangle from "/assets/images/bg-triangle.svg"
import Pentagon from "/assets/images/bg-pentagon.svg"

// Gunakan URL string untuk asset di public
const OriginalHeader = "/assets/images/logo.svg"
const BonusHeader = "/assets/images/logo-bonus.svg"
const OriginalRules = "/assets/images/image-rules.svg"
const BonusRules = "/assets/images/image-rules-bonus.svg"

export let original = {
  options: ["rock", "paper", "scissors"],
  rules: OriginalRules,
  img: OriginalHeader,
  rulesAlt: "rock beats scissors, paper beats rock, scissors beats paper",
  background: Triangle,
  original: true
}

export let bonus = {
  options: ["rock", "paper", "scissors", "spock", "lizard"],
  rules: BonusRules,
  img: BonusHeader,
  rulesAlt:
    "rock beats scissors and lizard, paper beats rock and spock, scissors beats paper and lizard, spock beats scissors and rock, lizard beats spock and paper",
  background: Pentagon,
  original: false
}

export function createItemsArray(arr) {
  const itemsArr = []
  arr.forEach((item) => itemsArr.push({ name: item, nodeRef: createRef() }))
  return itemsArr
}

export const gameModes = [original, bonus]
