import { CSSTransition, SwitchTransition } from "react-transition-group"
import { useState, useEffect, useRef } from "react"
import { original, bonus } from "../data"

export default function Header({ score, mode, altText }) {
  const [animate, setAnimate] = useState(false)

  // Satu ref untuk masing-masing mode
  const originalRef = useRef(null)
  const bonusRef = useRef(null)

  useEffect(() => {
    setAnimate((prev) => !prev)
  }, [mode])

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={mode === 0 ? "original" : "bonus"}
        timeout={400}
        nodeRef={mode === 0 ? originalRef : bonusRef}
        classNames="animateHeader"
      >
        <CSSTransition
          in={animate}
          timeout={750}
          nodeRef={mode === 0 ? originalRef : bonusRef}
          classNames="animateHeaderFade"
        >
          <div
            ref={mode === 0 ? originalRef : bonusRef}
            className="headerContainer"
          >
            <img
              className="headerContainer_name"
              alt={altText}
              src={!mode ? original.img : bonus.img}
            />
            <div className="headerContainer_scoreBoard">
              <h2 className="headerContainer_scoreBoard_name font-600">
                score
              </h2>
              <div className="headerContainer_scoreBoard_score font-700">
                {score}
              </div>
            </div>
          </div>
        </CSSTransition>
      </CSSTransition>
    </SwitchTransition>
  )
}
