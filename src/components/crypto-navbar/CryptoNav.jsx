import React from 'react';
import styles from './cryptoNav.module.css'
import { FaAngleDown } from "react-icons/fa6";

const CryptoNav = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navContainer}>
                <button><p> <span>☆</span>Favourites </p></button>
                <button><p> Cryptocurrencies </p></button>
                <button><p> eFi </p></button>
                <button><p> NFTs & Collectibles </p></button>
            </nav>
            <div className={styles.filterRow}>
                <p>show rows</p>
                <button><p>100</p><FaAngleDown /></button>
            </div>

        </div>
    );
}

export default CryptoNav;
