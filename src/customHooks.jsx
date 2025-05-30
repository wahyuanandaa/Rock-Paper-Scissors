import { useEffect } from "react"

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current
      if (!el || el.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}
