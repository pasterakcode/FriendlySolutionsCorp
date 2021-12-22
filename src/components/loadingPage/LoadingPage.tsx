import React from "react";
import styles from './LoadingPage.module.css'

const LoadingPage = () => {
    return (
        <div className={styles.loadingPage}>
            <div className={styles.loadingCircle}></div>
            <p className={styles.loadingInfo}>loading . . .</p>
        </div>
    )
}

export default LoadingPage;