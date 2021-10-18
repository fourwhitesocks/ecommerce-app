
import styles from './header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';



const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
            <p className={styles.headerTitle}>
                Hyper Bros. Trading Cards
            </p>
             
            <p className={styles.headerCart}> 

            <FaShoppingCart />
                $0.00
            </p>
            </Container>
        </header>


    )
}

export default Header;