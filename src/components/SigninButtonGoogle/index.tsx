import styles from './styles.module.scss';

import {FaGoogle} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SigninButtonGoogle(){

    const isUserLoggedIn = false;

    return isUserLoggedIn ?(
        <button type="button" className={styles.signinButton}>
            <FaGoogle color="#04d361"/>
            Felipe
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ):(
        <button type="button" className={styles.signinButton}>
            <FaGoogle color="#eba417"/>
            Signin in 
        </button>
    );
}