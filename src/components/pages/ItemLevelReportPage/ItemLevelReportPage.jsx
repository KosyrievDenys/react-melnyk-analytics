import React, { useState } from "react";

//components
import { HeaderLevels } from "../../common/HeaderLevels/HeaderLevels";

// assets
import styles from './ItemLevelReportPage.module.scss';
import itemTable from '../../../assets/img/icons/item-table.svg';
import star from '../../../assets/img/icons/star.svg';
import starOrange from '../../../assets/img/icons/star-orange.svg';
import arrowCircleLeft from '../../../assets/img/icons/arrow-circle-left.svg';
import arrowCircleRight from '../../../assets/img/icons/arrow-circle-right.svg';

const dataTable = [
  { name: 'Pepperoni Pizza', rating: 4, sale: 45, totalSales: 400, cancelledSales: 300 },
  { name: 'Pizza2 Pizza2 Pizza2 Pizza2 Pizza2', rating: 5, sale: 45, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza3', rating: 2, sale: 50, totalSales: 300, cancelledSales: 200 },
  { name: 'Pizza4', rating: 3, sale: 15, totalSales: 400, cancelledSales: 300 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
  { name: 'Pizza5', rating: 5, sale: 25, totalSales: 200, cancelledSales: 200 },
]

const starts = [1, 2, 3, 4, 5];
export const ItemLevelReportPage = () => {

  const [menuSettings, setMenuSettings] = useState(false);

  return (
    <section
      className={styles.itemLevelReportPage}
      onClick={() => menuSettings && setMenuSettings(false)}
    >
      <HeaderLevels
        title='Item Level Report'
        menuSettings={menuSettings}
        setMenuSettings={setMenuSettings}
      ></HeaderLevels>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.table}>
            <div className={styles.header}>
              <div className={styles.row}>
                <div className={styles.cell}><span>Item Name</span></div>
                <div className={styles.cell}><span>Rating</span></div>
                <div className={styles.cell}><span>Sale Count</span></div>
                <div className={styles.cell}><span>Total Sales</span></div>
                <div className={styles.cell}><span>Cancelled Sales</span></div>
              </div>
            </div>
            <div className={styles.body}>
              {dataTable.map((item, index) => (
                <div
                  className={styles.row}
                  key={index}
                >
                  <div className={styles.cell}>
                    <img className={styles.icon} src={itemTable} alt='' />
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.cell}>
                    {starts.slice(0, item.rating).map(() => <img className={styles.icon} src={starOrange} alt='' />)}
                    {starts.slice(item.rating, 5).map(() => <img className={styles.icon} src={star} alt='' />)}
                    <p>{item.rating}/5</p>
                  </div>
                  <div className={styles.cell}>
                    <p>{item.sale}%</p>
                  </div>
                  <div className={styles.cell}>
                    <p>₹ {item.totalSales}</p>
                  </div>
                  <div className={styles.cell}>
                    <p>₹ {item.cancelledSales}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.results}>
          <div className={styles.left}>
            Show
            <select name='' id=''>
              <option value='10'>10</option>
            </select>
            <p>Results<span>5</span><span>/s</span></p>
          </div>
          <div className={styles.right}>
            <img className={styles.icon} src={arrowCircleLeft} alt='' />
            1
            <img className={styles.icon} src={arrowCircleRight} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}