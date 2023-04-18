import React from "react";

// assets
import styles from './ItemLevelsReportPage.module.scss';
import { HeaderLevels } from "../../common/HeaderLevels/HeaderLevels";

export const ItemLevelsReportPage = () => {
  return(
    <section className={styles.itemLevelsReportPage}>
      <HeaderLevels
        // title='Item Level Report'
        title='Item Level Report Item Level Report Item Level Report Item Level Report'
      ></HeaderLevels>
    </section>
  )
}