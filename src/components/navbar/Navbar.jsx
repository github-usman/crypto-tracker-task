import styles from "./navbar.module.css"
import logo from '../../assets/images/logo.svg'
import search_crypto from '../../assets/icons/search_crypto.svg'
import hamburger_menu from '../../assets/icons/hamburger_menu.svg'


const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* destop view */}
            <div className={styles.desktopContainer}>
                <img src={logo} width={167} height={35} alt="Crypto-Tracker logo, Track your Trade, Top 100 Cryptocurency" />
                <div className={styles.btnContainer}>
                    <button><img src={search_crypto} width={20} height={20} alt="search using Crypto Tracker, Track your Trade, Top 100 Cryptocurency" /></button>
                    <button><img src={hamburger_menu} width={24} height={24} alt="hamburger_menu , Track your Trade, Market Cap" /></button>
                </div>
            </div>

            {/* mobile view */}
            <div className={styles.mobileContainer}>
                <button><img src={hamburger_menu} width={24} height={24} alt="hamburger_menu , Track your Trade, Market Cap" /></button>
                <img src={logo} width={117} height={25} alt="Crypto-Tracker logo, Track your Trade, Top 100 Cryptocurency" />
            </div>
        </div>
    )
}

export default Navbar