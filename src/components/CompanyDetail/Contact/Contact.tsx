import styles from '../CompanyDetail.module.scss'
import { TContact, TContactForm } from '@/types/data'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { refformattingContactData, reformattingStringToPhone } from '@/utility/reformattingDataFields'
import { EditButton } from '../EditButton/EditButton'
import { StoreContext } from '@/index'
import { TOKEN_KEY } from '@/consts'

interface ContactsProps {
    contact: TContact
}

export const Contact = (props: ContactsProps) => {
    const store = useContext(StoreContext)
    const [contact, setContact] = useState<TContact>(props.contact)
    const [isEdit, setIsEdit] = useState(false)
    const [pending, setPending] = useState(false)

    const { register, formState, handleSubmit } = useForm<TContactForm>({
        defaultValues: {
            ...contact,
            phone: reformattingStringToPhone(contact.phone),
            person: `${contact.firstname} ${contact.lastname}`,
        },
    })

    const updateContact: SubmitHandler<TContactForm> = async data => {
        refformattingContactData(data)

        setPending(true)
        try {
            await store.api.contacts
                .update(localStorage.getItem(TOKEN_KEY), data)
                .then(result => setContact(result.data))
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
                <div className={styles['detail-info__header-title']}>Contacts</div>
                <EditButton
                    isEdit={isEdit}
                    pending={pending}
                    setIsEdit={setIsEdit}
                    handleSubmit={handleSubmit}
                    onSubmit={updateContact}
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
                            {formState.errors.person && (
                                <span className="form-item__input-error">{formState.errors.person?.message}</span>
                            )}
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
                            <input
                                type="tel"
                                {...register('phone', {
                                    pattern: {
                                        value: /^\s*\+?\s*(\d\s*){11}$/i,
                                        message: '* invalid phone number',
                                    },
                                })}
                            />
                            {formState.errors.phone && (
                                <span className="form-item__input-error">{formState.errors.phone?.message}</span>
                            )}
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
                            {formState.errors.email && (
                                <span className="form-item__input-error">{formState.errors.email?.message}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
function refformattingData(data: TContact) {
    throw new Error('Function not implemented.')
}
