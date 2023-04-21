import React, { useState } from "react";

//libs
import { NavLink } from 'react-router-dom';

//assets
import styles from './HeaderLevels.module.scss';
import search from '../../../assets/img/icons/search.svg'
import arrowLeft from '../../../assets/img/icons/arrow-left-white.svg'
import settings from '../../../assets/img/icons/setting.svg'


export const HeaderLevels = ({ title, menuSettings, setMenuSettings }) => {

  const [activeSettings, setActiveSettings] = useState(false);

  return (
    <header className={styles.headerLevels}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.backAndTitle}>
              <NavLink
                className={styles.btnBack}
                to={'#'}
              >
                <img src={arrowLeft} className={styles.icon} alt='' />
              </NavLink>
              <h2>{title}</h2>
            </div>
            <label htmlFor=''>
              <img src={search} alt='' className={styles.icon} />
              <input type='text' placeholder='Search Items' />
            </label>
          </div>
          <div className={styles.right}>
            <div
              onClick={() => setMenuSettings(!menuSettings)}
              className={activeSettings && styles.activeSettings}
            >
              <img src={settings} alt='' className={styles.icon} />
              {menuSettings && <ul>
                <li onClick={() => setActiveSettings(true)}>By Date</li>
                <li onClick={() => setActiveSettings(true)}>Tip Amount - High to Low</li>
                <li onClick={() => setActiveSettings(true)}>Tip Amount - Low to High</li>
                <li onClick={() => setActiveSettings(true)}>No. of Tips - High to Low</li>
                <li onClick={() => setActiveSettings(true)}>No. of Tips - Low to High</li>
              </ul>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}