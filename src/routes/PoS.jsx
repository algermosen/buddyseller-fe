import { AnimatedPage } from "../components"
import { useTranslation } from "react-i18next"

function PoS() {
    const { t } = useTranslation()
    return (
        <AnimatedPage>
            <div className="bg-white rounded p-5">
                <h3 className="text-3xl">
                    {t("pos:title")}
                </h3>
            </div>
        </AnimatedPage>
    )
}

export default PoS
