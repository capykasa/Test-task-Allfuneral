import styles from '../CompanyDetail.module.scss'
import { TCompany } from '@/types/data'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { EditButton } from '../EditButton/EditButton'
import { refformattingInfoData } from '@/utility/reformattingDataFields'

interface InfoProps {
    company: TCompany
}

export const Info = ({ company }: InfoProps) => {
    const [isEdit, setIsEdit] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<TCompany>({
        defaultValues: company,
    })

    return (
        <div className={styles['detail-info']}>
            <div className={styles['detail-info__header']}>
                <div className={styles['detail-info__header-title']}>{company.name}</div>
                <EditButton
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    handleSubmit={handleSubmit}
                    refformattingData={refformattingInfoData}
                />
            </div>
            <div className={`${styles['detail-info__body']}${isEdit ? ' form' : ''}`}>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Agreement:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>
                            {company.contract.no}
                            <span className={styles['detail-info__body-item-text--separator']}>/</span>
                            {company.contract.issue_date.toLocaleDateString()}
                        </span>
                    ) : (
                        <div className="form-item__wrapper">
                            <input type="text" {...register('contract.no')} />
                            <label htmlFor="date">Date:</label>
                            <input
                                id="date"
                                type="date"
                                defaultValue={company.contract.issue_date.toLocaleDateString('en-CA')}
                                {...register('contract.issue_date', {
                                    valueAsDate: true,
                                })}
                            />
                        </div>
                    )}
                </div>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Business entity:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>{company.businessEntity}</span>
                    ) : (
                        <div className="form-item__wrapper">
                            <input type="text" {...register('businessEntity')} />
                        </div>
                    )}
                </div>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Company type:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>{company.type.join(', ')}</span>
                    ) : (
                        <input type="text" {...register('type')} />
                    )}
                </div>
            </div>
        </div>
    )
}
