
import styles from './header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';

import container from '@components/container';



const Header = () => {
    return (
        <header className={styles.header}>
            <container className={styles.headerContainer}>
            <p className={styles.headerTitle}>
                Amy&apos;s Store
            </p>
             
            <p className={styles.headerCart}> 

            <FaShoppingCart />
                $0.00
            </p>
            </container>
        </header>


    )
}

export default Header;