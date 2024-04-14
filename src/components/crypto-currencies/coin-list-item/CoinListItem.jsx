import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import ModalCrypto from '../modal-popup/ModalCrypto';
import styles from "./coinListItem.module.css";
import { usePageContext } from '../../../contexts/PageContext';


const CoinListItem = ({ coin, index }) => {

    const btcPercentage = (coin.circulating_supply / coin.total_supply) * 100;
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { currentPage } = usePageContext();

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    };


    return (
        <>
            {/* destop view */}
            <div className={styles.coinTableItems}>
                <p className={styles.indexing} ><span style={{ fontSize: "18px" }}>☆</span>{((currentPage * 10) - 10) + (index + 1)}</p>  {/* change pages dynamically*/}
                <p className={styles.name}>
                    <img src={coin.image} alt={coin.name} height={24} width={24} />
                    {coin.name} <span style={{ color: '#808A9D' }}>{(coin.symbol).toUpperCase()}</span>
                </p>
                <p className={styles.alignRight}>${coin.current_price}</p>

                <p className={coin.price_change_percentage_24h > 0 ? styles.profitBtn : styles.lossBtn}>
                    {coin.price_change_percentage_24h < 0 ? <FaCaretDown size={14} /> : <FaCaretUp size={14} />}
                    {coin.price_change_percentage_24h < 0 ? (coin.price_change_percentage_24h * -1).toFixed(2) : (coin.price_change_percentage_24h).toFixed(2)}%
                </p>

                <p className={coin.price_change_percentage_7d_in_currency > 0 ? styles.profitBtn : styles.lossBtn}>
                    {coin.price_change_percentage_7d_in_currency < 0 ? <FaCaretDown size={14} /> : <FaCaretUp size={14} />}
                    {coin.price_change_percentage_7d_in_currency < 0 ? (coin.price_change_percentage_7d_in_currency * -1).toFixed(2) : (coin.price_change_percentage_7d_in_currency).toFixed(2)}%
                </p>

                <p className={styles.alignRight}>${(coin.market_cap).toLocaleString()}</p>
                <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', fontWeight: '500', gap: '4px' }}>
                    <p> ${(coin.total_volume).toLocaleString()}</p>
                    <p style={{ color: '#86898f', fontSize: '12px' }}>{coin.high_24h} BTC</p>
                </p>

                <div className={styles.circulatingSupply}>
                   <p> ${(coin.circulating_supply).toFixed(2).toLocaleString()} BTC</p>
                    <div className={styles.loadingBarParent}>
                        <div className={styles.loadingBarChild} style={{ width: btcPercentage }} ></div>
                    </div>
                    </div>
                <p style={{ textAlign: 'right', cursor: 'pointer', paddingRight: '0px' }}><TbDotsVertical size={18} /></p>
            </div>



            {/* mobile view */}
            <div className={styles.coinTableItemsMobile} onClick={toggleModal}>
                <p><span style={{ fontSize: "18px" }}>☆</span></p>
                <p className={styles.name}>

                    <img src={coin.image} alt={coin.name} height={24} width={24} />
                    {coin.name} <span style={{ color: '#808A9D' }}>{(coin.symbol).toUpperCase()}</span>
                </p>
                <p>${coin.current_price}</p>

                <p className={coin.price_change_percentage_24h > 0 ? styles.profitBtn : styles.lossBtn}>
                    {coin.price_change_percentage_24h < 0 ? <FaCaretDown size={14} /> : <FaCaretUp size={14} />}
                    {coin.price_change_percentage_24h < 0 ? (coin.price_change_percentage_24h * -1).toFixed(2) : (coin.price_change_percentage_24h).toFixed(2)}%
                </p>

            </div>

            {/* modal */}
            {isOpenModal && (
                <div className={styles.parentDivModal}>
                    <ModalCrypto coin={coin} setIsOpenModal={setIsOpenModal} />
                </div>
            )}




        </>
    );
};

export default CoinListItem;
