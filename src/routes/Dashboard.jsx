import { useTranslation } from "react-i18next"
import {Button} from "@nextui-org/react";

function Dashboard() {
  const { t } = useTranslation()

  const lng = navigator.language

  return (
    <>
      <div>{t('dashboard:title')}</div>
      <div>Lang: {lng}</div>
      <div className="bg-white gap-2 flex flex-wrap">

      <Button color="primary" variant="solid">Solid</Button>
      <Button color="primary" variant="ghost">Ghost</Button>
      <Button color="success" variant="solid">Solid</Button>
      <Button color="success" variant="ghost">Ghost</Button>
      <Button color="secondary" variant="solid">Solid</Button>
      <Button color="secondary" variant="ghost">Ghost</Button>
      <Button color="warning" variant="solid">Solid</Button>
      <Button color="warning" variant="ghost">Ghost</Button>
      <Button color="danger" variant="solid">Solid</Button>
      <Button color="danger" variant="ghost">Ghost</Button>
      </div>
    </>
  )
}

export default Dashboard