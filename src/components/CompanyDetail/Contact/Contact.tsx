import styles from '../CompanyDetail.module.scss'
import { TContact, TContactForm } from '@/types/data'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { refformattingContactData, reformattingStringToPhone } from '@/utility/reformattingDataFields'
import { EditButton } from '../EditButton/EditButton'

interface ContactsProps {
    contact: TContact
}

export const Contact = ({ contact }: ContactsProps) => {
    const [isEdit, setIsEdit] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<TContactForm>({
        defaultValues: {
            ...contact,
            phone: reformattingStringToPhone(contact.phone),
            person: `${contact.firstname} ${contact.lastname}`,
        },
    })

    return (
        <div className={styles['detail-info']}>
            <div className={styles['detail-info__header']}>
                <div className={styles['detail-info__header-title']}>Contacts</div>
                <EditButton
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    handleSubmit={handleSubmit}
                    refformattingData={refformattingContactData}
                />
            </div>
            <div className={`${styles['detail-info__body']}${isEdit ? ' form' : ''}`}>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Responsible person:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>
                            {contact.firstname} {contact.lastname}
                        </span>
                    ) : (
                        <div className="form-item__input">
                            <input type="text" {...register('person')} />
                            {errors.person && <span className="form-item__input-error">{errors.person?.message}</span>}
                        </div>
                    )}
                </div>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>Phone number:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>
                            {reformattingStringToPhone(contact.phone)}
                        </span>
                    ) : (
                        <div className="form-item__input">
                            <input type="tel" {...register('phone')} />
                            {errors.phone && <span className="form-item__input-error">{errors.phone?.message}</span>}
                        </div>
                    )}
                </div>
                <div className={`${styles['detail-info__body-item']} form-item`}>
                    <span className={styles['detail-info__body-item-name']}>E-mail:</span>
                    {!isEdit ? (
                        <span className={styles['detail-info__body-item-text']}>{contact.email}</span>
                    ) : (
                        <div className="form-item__input">
                            <input
                                type="email"
                                {...register('email', {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: '* invalid email address',
                                    },
                                })}
                            />
                            {errors.email && <span className="form-item__input-error">{errors.email?.message}</span>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
