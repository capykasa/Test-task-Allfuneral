import styles from '../CompanyDetail.module.scss'
import { TCompany } from '@/types/data'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { EditButton } from '../EditButton/EditButton'
import { refformattingInfoData, reformattingCompanyTypesToView } from '@/utility/reformattingDataFields'
import { BUSINESS_ENTITIES } from '@/consts/BusinessEntities'
import { Select } from '../Select/Select'
import { COMPANY_TYPES } from '@/consts/CompanyTypes'

interface InfoProps {
    company: TCompany
}

export const Info = ({ company }: InfoProps) => {
    const [isEdit, setIsEdit] = useState(false)
    const {
        control,
        register,
        handleSubmit,
        watch
    } = useForm<TCompany>({
        defaultValues: company,
    })
    const formValues = watch()
    const companyTypesValueView = reformattingCompanyTypesToView(formValues.type)
    const companyTypesView = reformattingCompanyTypesToView(COMPANY_TYPES)

    const cotractIssueDate = new Date(company.contract.issue_date)

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
                            {cotractIssueDate.toLocaleDateString()}
                        </span>
                    ) : (
                        <div className="form-item__wrapper">
                            <input type="text" {...register('contract.no')} />
                            <label htmlFor="date">Date:</label>
                            <input
                                id="date"
                                type="date"
                                defaultValue={cotractIssueDate.toLocaleDateString('en-CA')}
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
                        <Select name="businessEntity" control={control} formValue={formValues.businessEntity} options={BUSINESS_ENTITIES} />
                    )}
                </div>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Company type:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>{company.type.join(', ')}</span>
                    ) : (
                        <Select name="type" control={control} formValue={companyTypesValueView} options={companyTypesView} isMulti />
                    )}
                </div>
            </div>
        </div>
    )
}
