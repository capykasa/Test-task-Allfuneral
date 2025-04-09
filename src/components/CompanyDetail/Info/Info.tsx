import styles from '../CompanyDetail.module.scss'
import { TCompany } from '@/types/data'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EditButton } from '../EditButton/EditButton'
import { refformattingInfoData, reformattingCompanyTypesToView } from '@/utility/reformattingDataFields'
import { BUSINESS_ENTITIES } from '@/consts/BusinessEntities'
import { Select } from '../Select/Select'
import { COMPANY_TYPES } from '@/consts/CompanyTypes'
import { StoreContext } from '@/index'

interface InfoProps {
    company: TCompany
}

export const Info = (props: InfoProps) => {
    const store = useContext(StoreContext)
    const [company, setCompany] = useState<TCompany>(props.company)
    const [isEdit, setIsEdit] = useState(false)
    const [pending, setPending] = useState(false)

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

    const updateInfo: SubmitHandler<TCompany> = async (data) => {
        refformattingInfoData(data)
        
        setPending(true)
        try {
            await store.api.companies.update(localStorage.getItem('token'), data)
                .then(result => setCompany(result.data))
                .catch(error => console.error(error.response.data.error))

        } catch (error) {
            console.error(error)
        } finally {
            setPending(false)
            setIsEdit(false)
        }
    }

    return (
        <div className={styles['detail-info']}>
            <div className={styles['detail-info__header']}>
                <div className={styles['detail-info__header-title']}>{company.name}</div>
                <EditButton
                    isEdit={isEdit}
                    pending={pending}
                    setIsEdit={setIsEdit}
                    handleSubmit={handleSubmit}
                    onSubmit={updateInfo}
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
                        <span className={styles['detail-info__body-item-text']}>{companyTypesValueView.join(', ')}</span>
                    ) : (
                        <Select name="type" control={control} formValue={companyTypesValueView} options={companyTypesView} isMulti />
                    )}
                </div>
            </div>
        </div>
    )
}
function setPending(arg0: boolean) {
    throw new Error('Function not implemented.')
}

