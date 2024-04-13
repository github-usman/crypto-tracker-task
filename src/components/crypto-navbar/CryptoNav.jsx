import React from 'react';
import { Link } from 'react-router-dom';
import styles from  './cryptoNav.module.css'

const CryptoNav = () => {
    return (
        <nav className={styles.container}>
               <button> <Link to="/favourites"><span>☆</span>Favourites</Link></button>
               <button> <Link to="/">Cryptocurrencies</Link></button>
               <button> <Link to="/defi">DeFi</Link></button>
               <button> <Link to="/nfts">NFTs & Collectibles</Link></button>
        </nav>
    );
}

export default CryptoNav;
