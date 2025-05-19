import { createRef } from "react"
// Gunakan URL string untuk asset di public dengan base path Vite
function assetPath(name) {
  return import.meta.env.BASE_URL + "assets/images/" + name;
}

const Triangle = assetPath("bg-triangle.svg");
const Pentagon = assetPath("bg-pentagon.svg");
const OriginalHeader = assetPath("logo.svg");
const BonusHeader = assetPath("logo-bonus.svg");
const OriginalRules = assetPath("image-rules.svg");
const BonusRules = assetPath("image-rules-bonus.svg");

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
