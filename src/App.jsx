import { useState, useEffect, useCallback } from "react"
import Header from "./components/Header"
import GameGrid from "./components/GameGrid"
import Modal from "./components/Modal"
import Buttons from "./components/Buttons"
import { gameModes } from "./data.jsx"
import "../dist/css/index.css"

function App() {
  const [score, setScore] = useState(0)
  const [isModal, setIsModal] = useState(false)
  const [choice, setChoice] = useState(undefined)
  const [currentGameArr, setCurrentGameArr] = useState([])
  const [mode, setMode] = useState(0)

  const currentMode = gameModes[mode]

  const changeMode = useCallback(() => {
    setChoice(undefined)
  }, [])

  const createWinConditionsArr = useCallback(() => {
    let { options } = currentMode
    if (choice) {
      const choiceIndex = options.indexOf(choice)
      const gameArr = options
        .slice(choiceIndex)
        .concat(options.slice(0, choiceIndex))
      setCurrentGameArr(gameArr)
    }
  }, [choice, currentMode])

  useEffect(() => changeMode(), [changeMode])
  useEffect(() => createWinConditionsArr(), [createWinConditionsArr])

  return (
    <main>
      <Header
        score={score}
        mode={mode}
        altText={currentMode.options.join(", ")}
      />

      <GameGrid
        mode={mode}
        choice={choice}
        setChoice={setChoice}
        setScore={setScore}
        currentGameArr={currentGameArr}
      />

      <Buttons
        setMode={setMode}
        mode={mode}
        choice={choice}
        showModal={setIsModal}
      />

      <Modal
        currentMode={currentMode}
        modalOpen={isModal}
        closeModal={() => setIsModal(false)}
      />
    </main>
  )
}

export default App
