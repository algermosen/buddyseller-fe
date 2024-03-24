import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import AppRoutes from "./routes"
import './App.css'

function App() {

  const { i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
