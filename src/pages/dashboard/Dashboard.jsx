import { useTranslation } from "react-i18next"
import { AnimatedPage } from "../../components"

function Dashboard() {
  const { t } = useTranslation()

  return (
    <AnimatedPage mode="wait">
      <div className="text-5xl bg-primary rounded p-5 text-primary-foreground">{t('dashboard:title')}</div>
    </AnimatedPage>
  )
}

export default Dashboard