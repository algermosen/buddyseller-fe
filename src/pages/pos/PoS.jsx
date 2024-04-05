import { useState } from "react";
import { AnimatedPage, BackButton } from "../../components";
import { useTranslation } from "react-i18next";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { motion as m } from "framer-motion";
import ProductForm from "./components/ProductForm";
// import { Icon } from "@iconify/react";

const tabKeys = {
  PRODUCTS: "products",
  CUSTOMER: "costumer",
  CONFIRMATION: "confirmation",
};

const animations = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

const transition = {
  duration: 0.45,
  ease: "easeOut",
}

function PoS() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(tabKeys.PRODUCTS);
  const [disabledTabs, setDisabledTabs] = useState([
    tabKeys.CUSTOMER,
    tabKeys.CONFIRMATION,
  ]);

  const resetDisabledTabs = () => {
    setDisabledTabs([tabKeys.CUSTOMER, tabKeys.CONFIRMATION]);
  };

  return (
    <AnimatedPage>
      <div className="bg-white rounded p-5">
        <h3 className="text-3xl pb-3">{t("pos:title")}</h3>
        <Tabs
          aria-label="Options"
          size="lg"
          fullWidth
          selectedKey={selected}
          onSelectionChange={setSelected}
          disabledKeys={disabledTabs}
        >
          <Tab key={tabKeys.PRODUCTS} title={t("pos:tab.product")}>
            <m.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={transition}
            >
              <ProductForm />
              <Button
                color="secondary"
                variant="ghost"
                onClick={() => {
                  setDisabledTabs(
                    disabledTabs.filter((item) => item !== tabKeys.CUSTOMER)
                  );
                  setSelected(tabKeys.CUSTOMER);
                }}
              >
                {t("actions:next")}
              </Button>
            </m.div>
          </Tab>
          <Tab key={tabKeys.CUSTOMER} title={t("pos:tab.customer")}>
            <m.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={transition}
            >
              <BackButton
                onClick={() => {
                  setSelected(tabKeys.PRODUCTS);
                }}
              />
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <Button
                color="secondary"
                variant="ghost"
                onClick={() => {
                  setDisabledTabs(
                    disabledTabs.filter((item) => item !== tabKeys.CONFIRMATION)
                  );
                  setSelected(tabKeys.CONFIRMATION);
                }}
              >
                {t("actions:next")}
              </Button>
            </m.div>
          </Tab>
          <Tab key={tabKeys.CONFIRMATION} title={t("pos:tab.confirmation")}>
            <m.div
              variants={animations}
              initial="initial"
              animate="animate"
              transition={transition}
            >
              <BackButton
                onClick={() => {
                  setSelected(tabKeys.CUSTOMER);
                }}
              />
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <Button
                color="primary"
                variant="ghost"
                onClick={() => {
                  resetDisabledTabs();
                  setSelected(tabKeys.PRODUCTS);
                }}
              >
                {t("actions:confirm")}
              </Button>
            </m.div>
          </Tab>
        </Tabs>
      </div>
    </AnimatedPage>
  );
}

export default PoS;
