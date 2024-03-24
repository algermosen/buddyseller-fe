import { useTranslation } from "react-i18next"

function Dashboard() {
  const { t } = useTranslation()

  const lng = navigator.language

  return (
    <>
      <div>{t('dashboard:title')}</div>
      <div>Lang: {lng}</div>
    </>
  )
}

export default Dashboard