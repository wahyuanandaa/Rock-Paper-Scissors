import { useState, useRef, useEffect, createRef } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { createItemsArray, original, bonus } from "../data"

export default function Choose({ choice, setChoice, mode }) {
  const [isEnter, setIsEnter] = useState(mode === 0 ? true : false)
  const [animateSelect, setAnimateSelect] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    choice ? setAnimateSelect(true) : setAnimateSelect(false)
  }, [choice])
  useEffect(() => {
    mode === 0 ? setIsEnter(true) : setIsEnter(false)
  }, [mode])

  const optionsArr = createItemsArray(
    isEnter ? original.options : bonus.options
  ).map((option) => ({
    ...option,
    nodeRef: createRef()
  }))

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={isEnter ? "Choose" : "Reveal"}
        timeout={750}
        appear={true}
        nodeRef={containerRef}
        classNames={"animateChoose"}
      >
        <div
          ref={containerRef}
          className={
            isEnter
              ? "chooseContainer chooseContainer_original"
              : "chooseContainer chooseContainer_bonus"
          }
        >
          <img
            className={`chooseContainer_bg${
              animateSelect ? " animateChooseFade-enter-done" : ""
            }`}
            src={isEnter ? original.background : bonus.background}
            alt=""
          />
          {optionsArr.map(({ name, nodeRef }, index) => {
            return (
              <CSSTransition
                key={index}
                in={animateSelect}
                nodeRef={nodeRef}
                timeout={1000}
                appear
                classNames={
                  name === choice
                    ? `animateSelect-${isEnter ? "original" : "bonus"}-${name}`
                    : "animateChooseFade"
                }
              >
                <button
                  ref={nodeRef}
                  aria-label={`${name}`}
                  className={
                    isEnter
                      ? `button originalButton originalButton_${name} button_${name}`
                      : `button bonusButton bonusButton_${name} button_${name}`
                  }
                  onClick={() => setChoice(name)}
                ></button>
              </CSSTransition>
            )
          })}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}
