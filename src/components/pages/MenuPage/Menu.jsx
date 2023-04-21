import React from "react";

//libs
import cn from "classnames";
import { NavLink } from "react-router-dom";

//components
import thumbsDown from '../../../assets/img/icons/thumbs-down.svg';
import thumbsUp from '../../../assets/img/icons/thumbs-up.svg';
import nonVeg from '../../../assets/img/icons/non-veg.svg';
import yeVeg from '../../../assets/img/icons/item-table.svg';
import arrowRightPurple from '../../../assets/img/icons/arrow-right-purple.svg';
import dishePhoto from '../../../assets/img/dishe.jpg';
import styles from './Menu.module.scss';

const dataDishes = [
  { selling: true, name: 'Chicken Pepperoni Pizza', orders: 120, revenue: '8,000' },
  { selling: false, name: 'Pepperoni Pizza', orders: 7, revenue: '2,000' },
  { selling: false, name: 'Chicken', orders: 2, revenue: '300' },
]

export const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.todayDishes}>
        {dataDishes.map((dishe, index) => (
          <div className={styles.dishe} key={index}>
            <img
              className={cn(styles.back, dishe.selling && styles.true)}
              src={(dishe.selling && thumbsUp) || thumbsDown}
              alt='' />
            <div className={styles.selling}>
              <img
                src={(dishe.selling && thumbsUp) || thumbsDown}
                alt='' />
              <h2>{(dishe.selling && 'Best Selling') || 'Worst Selling'}</h2>
            </div>
            <div className={styles.disheDescription}>
              <img className={styles.dishePhoto} src={dishePhoto} alt='' />
              <div className={styles.wrapper}>
                <div className={styles.name}>
                  <img
                    src={(dishe.selling && yeVeg) || nonVeg}
                    alt='' />
                  <h3>{dishe.name}</h3>
                </div>
                <div className={(dishe.selling && styles.yeVeg) || styles.nonVeg}>
                  <p>Orders: <span>{dishe.orders}</span></p>
                  <p>Revenue: <span>₹{dishe.revenue}</span></p>
                </div>
              </div>
            </div>
            <div className={styles.viewMore}>
              <NavLink to={'#'}>
                View More
                <img src={arrowRightPurple} alt='' />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}