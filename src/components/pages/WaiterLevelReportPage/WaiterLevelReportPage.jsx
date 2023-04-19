import React from "react";

//components
import { HeaderLevels } from "../../common/HeaderLevels/HeaderLevels";

// assets
import styles from './WaiterLevelReportPage.module.scss';
import star from '../../../assets/img/icons/star.svg';
import starOrange from '../../../assets/img/icons/star-orange.svg';
import photo from '../../../assets/img/photo.jpg';

const dataWaiters = [
  {
    name: 'Courtney Wiscas Morty',
    prof: 'Lawyer',
    rating: 2,
    totalOrders: 20,
    totalSales: '8,000',
    tips1: 100,
    tips2: 200,
    tips3: 300,
    tips4: 400,
    tips5: 500,
  },
  {
    name: 'Courtney Henry',
    prof: 'Waiter',
    rating: 4,
    totalOrders: 35,
    totalSales: '2,000',
    tips1: 200,
    tips2: 200,
    tips3: 200,
    tips4: 200,
    tips5: 200,
  },
  {
    name: 'Courtney Henry',
    prof: 'Waiter',
    rating: 4,
    totalOrders: 35,
    totalSales: '2,000',
    tips1: 200,
    tips2: 200,
    tips3: 200,
    tips4: 200,
    tips5: 200,
  },
  {
    name: 'Courtney Henry',
    prof: 'Waiter',
    rating: 4,
    totalOrders: 35,
    totalSales: '2,000',
    tips1: 200,
    tips2: 200,
    tips3: 200,
    tips4: 200,
    tips5: 200,
  },
  {
    name: 'Courtney Henry',
    prof: 'Waiter',
    rating: 4,
    totalOrders: 35,
    totalSales: '2,000',
    tips1: 200,
    tips2: 200,
    tips3: 200,
    tips4: 200,
    tips5: 200,
  },
]

const starts = [1, 2, 3, 4, 5];
export const WaiterLevelReportPage = () => {
  return (
    <section className={styles.waiterLevelReportPage}>
      <HeaderLevels
        title='Waiter Level Report'
      ></HeaderLevels>
      <div className='container'>
        <div className={styles.content}>
          {dataWaiters.map((waiter, index) => (
            <div className={styles.waiter} key={index}>
              <div className={styles.top}>
                <div className={styles.account}>
                  <img src={photo} alt='' />
                  <div>
                    <p>{waiter.name}</p>
                    <p>{waiter.prof}</p>
                  </div>
                </div>
                <div className={styles.rating}>
                  {starts.slice(0, waiter.rating).map(() => <img className={styles.icon} src={starOrange} />)}
                  {starts.slice(waiter.rating, 5).map(() => <img className={styles.icon} src={star} />)}
                  <p>{waiter.rating}/5</p>
                </div>
              </div>
              <div className={styles.data}>
                <div>
                  <p>{waiter.totalOrders}</p>
                  <h3>Total Orders</h3>
                </div>
                <div>
                  <p>₹{waiter.totalSales}</p>
                  <h3>Total Sales</h3>
                </div>
                <div>
                  <p>₹{waiter.tips1}</p>
                  <h3>Tips</h3>
                </div>
                <div>
                  <p>₹{waiter.tips2}</p>
                  <h3>Tips</h3>
                </div>
                <div>
                  <p>₹{waiter.tips3}</p>
                  <h3>Tips</h3>
                </div>
                <div>
                  <p>₹{waiter.tips4}</p>
                  <h3>Tips</h3>
                </div>
                <div>
                  <p>₹{waiter.tips5}</p>
                  <h3>Tips</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}