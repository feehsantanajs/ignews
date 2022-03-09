import { SigninButton } from '../SigninButton';
import { SigninButtonGoogle } from '../SigninButtonGoogle';
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a >Posts</a>
                </nav>
                <SigninButtonGoogle />
                <SigninButton />
            </div>
        </header>

    );    
}