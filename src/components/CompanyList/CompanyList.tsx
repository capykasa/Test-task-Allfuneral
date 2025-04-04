import styles from './CompanyList.module.scss'

export const CompanyList = () => {
    return (
        <div className={styles['company-list']}>
            <div className={styles['company-item']}>
                <div className={styles['company-item__header']}>
                    <div className={styles['company-item__header-title']}>Company Name</div>
                </div>
                <div className={styles['company-item__body']}>
                    <div className={styles['company-item__body-item']}>1624/2-24 / 03.12.2024</div>
                    <div className={styles['company-item__body-item']}>Partnership</div>
                </div>
            </div>
        </div>
    )
}
