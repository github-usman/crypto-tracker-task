import React from 'react';
import styles from "./coinListItem.module.css"
import { TbDotsVertical } from "react-icons/tb";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


const CoinListItem = ({ coin, index }) => {
    const btcPercentage = (coin.circulating_supply / coin.total_supply) * 100;
    return (
        <div className={styles.coinTableItems}>
            <p style={{ textAlign: 'right', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px', color: '#808A9D' }}><span style={{ fontSize: "18px" }}>☆</span>{index + 1}</p>
            <p style={{ textAlign: 'left', display: 'flex', gap: '5px', alignItems: 'center', padding: '0 8px', fontWeight: '600' }}><img src={coin.image} alt={coin.name} height={24} width={24} />{coin.name} <span style={{ color: '#808A9D' }}>{(coin.symbol).toUpperCase()}</span></p>
            <p style={{ textAlign: 'right' }}>${coin.current_price}</p>
            <p style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', color: '#EA3943' }}><FaCaretDown size={14} /> {coin.price_change_percentage_24h < 0 ? (coin.price_change_percentage_24h * -1).toFixed(2) : (coin.price_change_percentage_24h).toFixed(2)}%</p>
            <p style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', color: '#16C784' }}><FaCaretUp size={14} /> {coin.price_change_percentage_7d_in_currency < 0 ? (coin.price_change_percentage_7d_in_currency * -1).toFixed(2) : (coin.price_change_percentage_7d_in_currency).toFixed(2)}%</p>
            <p style={{ textAlign: 'right' }}>${(coin.market_cap).toLocaleString()}</p>
            <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', fontWeight: '500', gap: '4px' }}>
                <p> ${(coin.total_volume).toLocaleString()}</p>
                <p style={{ color: '#86898f', fontSize: '12px' }}>{coin.high_24h} BTC</p>
            </p>

            <p style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '4px' }}>${(coin.circulating_supply).toFixed(2).toLocaleString()} BTC
                <div style={{ width: "160px", height: '6px', backgroundColor: '#EFF2F5', borderRadius: '8px' }}>
                    <div style={{ width: btcPercentage, backgroundColor: '#CFD6E4', height: '100%', borderRadius: '8px' }}></div>
                </div></p>
            <p style={{ textAlign: 'right', cursor: 'pointer', paddingRight: '0px' }}><TbDotsVertical size={18} /></p>
        </div>
    );
};

export default CoinListItem;
