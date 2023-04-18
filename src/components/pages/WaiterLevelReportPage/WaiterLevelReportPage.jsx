import React from "react";

//components
import { HeaderLevels } from "../../common/HeaderLevels/HeaderLevels";

// assets
import styles from './WaiterLevelReportPage.module.scss';
import itemTable from '../../../assets/img/icons/item-table.svg';
import star from '../../../assets/img/icons/star.svg';
import starOrange from '../../../assets/img/icons/star-orange.svg';

// const dataTable = [
//   { name: 'Pepperoni Pizza', rating: 4, sale: 45, totalSales: 400, cancelledSales: 300 },
//   { name: 'Pizza2 Pizza2 Pizza2 Pizza2 Pizza2', rating: 5, sale: 45, totalSales: 200, cancelledSales: 200 },
//   { name: 'Pizza3', rating: 2, sale: 50, totalSales: 300, cancelledSales: 200 },
//   { name: 'Pizza4', rating: 3, sale: 15, totalSales: 400, cancelledSales: 300 },
//   { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
// ]

const starts = [1, 2, 3, 4, 5];
export const WaiterLevelReportPage = () => {
  return (
    <section className={styles.itemLevelReportPage}>
      <HeaderLevels
        title='Waiter Level Report'
      ></HeaderLevels>
      <div className='container'>


      </div>
    </section>
  )
}