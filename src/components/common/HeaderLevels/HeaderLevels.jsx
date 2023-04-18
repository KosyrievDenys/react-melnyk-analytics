import React from "react";

//libs
import { NavLink } from 'react-router-dom';

//assets
import styles from './HeaderLevels.module.scss';
import search from '../../../assets/img/icons/search.svg'
import arrowLeft from '../../../assets/img/icons/arrow-left.svg'
import settings from '../../../assets/img/icons/setting.svg'

export const HeaderLevels = ({ title }) => {
  return (
    <header className={styles.headerLevels}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.backAndTitle}>
              <NavLink
                className={styles.btnBack}
              >
                <img src={arrowLeft} className={styles.icon} />
              </NavLink>
              <h2>{title}</h2>
            </div>
            <label htmlFor=''>
              <img src={search} alt='' className={styles.icon} />
              <input type='text' placeholder='Search Items' />
            </label>
          </div>
          <div className={styles.right}>
            <img src={settings} alt='' className={styles.icon} />
          </div>
        </div>
      </div>
    </header>
  )
}