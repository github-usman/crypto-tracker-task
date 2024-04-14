import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import styles from "./modalCrypto.module.css";

const ModalCrypto = ({ coin, setIsOpenModal }) => {
    const btcPercentage = (coin.circulating_supply / coin.total_supply) * 100;

    return (
        <div className={styles.contentModal}>
          <div className={styles.container}>
            <div className={styles.topBar}>
                <p >
                    <img src={coin.image} alt={coin.name} height={24} width={24} />
                    {coin.name} <span style={{ color: '#808A9D' }}>{(coin.symbol).toUpperCase()}</span>
                </p>
                <button onClick={() => setIsOpenModal(false)}><RxCross1 /></button>

            </div>

            <section className={styles.priceSection}>
                <div>
                    <p className={styles.title}>PRICE</p>
                    <p >${coin.current_price}</p>
                </div>
                <div>
                    <p className={styles.title}>24H</p>
                    <p className={coin.price_change_percentage_24h > 0 ? styles.profitBtn : styles.lossBtn}>
                        {coin.price_change_percentage_24h < 0 ? <FaCaretDown size={14} /> : <FaCaretUp size={14} />}
                        {coin.price_change_percentage_24h < 0 ? (coin.price_change_percentage_24h * -1).toFixed(2) : (coin.price_change_percentage_24h).toFixed(2)}%
                    </p>
                </div>
                <div>
                    <p className={styles.title}>7D</p>
                    <p className={coin.price_change_percentage_7d_in_currency > 0 ? styles.profitBtn : styles.lossBtn}>
                        {coin.price_change_percentage_7d_in_currency < 0 ? <FaCaretDown size={14} /> : <FaCaretUp size={14} />}
                        {coin.price_change_percentage_7d_in_currency < 0 ? (coin.price_change_percentage_7d_in_currency * -1).toFixed(2) : (coin.price_change_percentage_7d_in_currency).toFixed(2)}%
                    </p>
                </div>


            </section>
               <div>
                 <p className={styles.title}>MARKET CAP</p>
                 <p className={styles.alignRight}>${(coin.market_cap).toLocaleString()}</p>
               </div>
               <div>
                <p className={styles.title}>VOLUME (24H)</p>
                <p style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', fontWeight: '500', gap: '4px' }}>
                    <p> ${(coin.total_volume).toLocaleString()}</p><span style={{ color: '#86898f', }}>({coin.high_24h} BTC)</span>
                </p>
               </div>
              
               <div>
                  <p className={styles.title}>CIRCULATING SUPPLY</p>
                  <div className={styles.circulatingSupply}>
                    <p>${(coin.circulating_supply).toFixed(2).toLocaleString()} BTC</p>
                    <div className={styles.loadingBarParent}>
                        <div className={styles.loadingBarChild} style={{ width: btcPercentage }} ></div>
                    </div></div>
                 </div>   
               </div>     
        </div>
    )
}

export default ModalCrypto