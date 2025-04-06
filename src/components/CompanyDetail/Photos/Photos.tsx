import styles from '../CompanyDetail.module.scss'
import AddPhoto from '@/assets/icons/add-photo.svg'
import Trash from '@/assets/icons/trash.svg'
import { TCompany } from '@/types/data'

interface PhotosProps {
    company: TCompany
}

export const Photos = ({ company }: PhotosProps) => {
    return (
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
    )
}
