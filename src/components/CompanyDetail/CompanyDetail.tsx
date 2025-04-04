import styles from './CompanyDetail.module.scss'
import Pencil from '@/assets/icons/pencil.svg'
import AddPhoto from '@/assets/icons/add-photo.svg'
import Trash from '@/assets/icons/trash.svg'

export const CompanyDetail = () => {
    return (
        <div className={styles['company-detail']}>
            <div className={styles['detail-info']}>
                <div className={styles['detail-info__header']}>
                    <div className={styles['cdetail-info__header-title']}>Company Details</div>
                    <button className="btn btn--outline btn--small">
                        <Pencil width={16} height={16} />
                        <span>Edit</span>
                    </button>
                </div>
                <div className={styles['detail-info__body']}>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Agreement:</span>
                        <span className={styles['detail-info__body-item-text']}>1624/2-24 / 03.12.2024</span>
                    </div>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Business entity:</span>
                        <span className={styles['detail-info__body-item-text']}>Partnership</span>
                    </div>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Company type:</span>
                        <span className={styles['detail-info__body-item-text']}>Funeral Home, Logistics services</span>
                    </div>
                </div>
            </div>

            <div className={styles['detail-info']}>
                <div className={styles['detail-info__header']}>
                    <div className={styles['cdetail-info__header-title']}>Contacts</div>
                    <button className="btn btn--outline btn--small">
                        <Pencil width={16} height={16} />
                        <span>Edit</span>
                    </button>
                </div>
                <div className={styles['detail-info__body']}>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Agreement:</span>
                        <span className={styles['detail-info__body-item-text']}>1624/2-24 / 03.12.2024</span>
                    </div>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Business entity:</span>
                        <span className={styles['detail-info__body-item-text']}>Partnership</span>
                    </div>
                    <div className={styles['detail-info__body-item']}>
                        <span className={styles['detail-info__body-item-name']}>Company type:</span>
                        <span className={styles['detail-info__body-item-text']}>Funeral Home, Logistics services</span>
                    </div>
                </div>
            </div>

            <div className={`${styles['detail-info']} ${styles['detail-gallery']}`}>
                <div className={styles['detail-info__header']}>
                    <div className={styles['detail-info__header-title']}>Photos</div>
                    <button className="btn btn--outline btn--small">
                        <AddPhoto width={16} height={16} />
                        <span>Add</span>
                    </button>
                </div>
                <div className={styles['detail-gallery__body']}>
                    <div className={styles['detail-gallery__list']}>
                        <div className={styles['detail-gallery__item']}>
                            <img src="/company-photo-1.png" alt="company-photo-1" />
                            <button className={`${styles['delete-btn']} btn btn--icon btn--small`}>
                                <Trash width={16} height={16} />
                            </button>
                        </div>
                        <div className={styles['detail-gallery__item']}>
                            <img src="/company-photo-2.png" alt="company-photo-2" />
                            <button className={`${styles['delete-btn']} btn btn--icon btn--small`}>
                                <Trash width={16} height={16} />
                            </button>
                        </div>
                        <div className={styles['detail-gallery__item']}>
                            <img src="/company-photo-3.png" alt="company-photo-3" />
                            <button className={`${styles['delete-btn']} btn btn--icon btn--small`}>
                                <Trash width={16} height={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
