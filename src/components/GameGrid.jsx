import { useRef, useState, useEffect } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Reveal from "./Reveal"
import Choose from "./Choose"

export default function GameGrid({
  mode,
  choice,
  setChoice,
  currentGameArr,
  setScore
}) {
  const [hasChoose, setHasChoose] = useState(true)

  // Satu ref untuk masing-masing transisi
  const revealRef = useRef(null)
  const chooseRef = useRef(null)

  useEffect(() => {
    choice ? setHasChoose(true) : setHasChoose(false)
  }, [choice])

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={hasChoose ? "Reveal" : "Choose"}
        timeout={hasChoose ? 0 : 1000}
        nodeRef={hasChoose ? revealRef : chooseRef}
        classNames="stateAnimate"
      >
        <div className="gameGridContainer">
          {!hasChoose ? (
            <div ref={chooseRef} className="bgc">
              <Choose choice={choice} setChoice={setChoice} mode={mode} />
            </div>
          ) : (
            <div ref={revealRef} className="bgr">
              <Reveal
                currentGameArr={currentGameArr}
                choice={choice}
                setScore={setScore}
                setChoice={setChoice}
              />
            </div>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}
