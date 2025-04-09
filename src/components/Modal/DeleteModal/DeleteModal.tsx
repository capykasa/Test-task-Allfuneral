import styles from '../Modal.module.scss'
import { useContext, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { Dispatcher } from '@/utility/types/Dispatcher'
import { StoreContext } from '@/index'
import { useNavigate } from 'react-router-dom'

interface DeleteModalProps {
    isOpen: boolean
    setIsOpen: Dispatcher<boolean>
    title: string
    body: string
    companyId: string
}

export const DeleteModal = ({ isOpen, setIsOpen, title, body, companyId }: DeleteModalProps) => {
    const store = useContext(StoreContext)
    const navigate = useNavigate()
    const [pending, setPending] = useState(false)

    const deleteCompany: SubmitHandler<string> = async (data) => {
        setPending(true)
        try {
            await store.api.companies.delete(localStorage.getItem('token'), data)
                .then(() => {
                    navigate('/')
                })
                .catch(error => console.error(error.response.data.error))

        } catch (error) {
            console.error(error)
        } finally {
            setPending(false)
        }
    }

    return (
        <>
            {isOpen && (
                <div className={styles['modal-wrapper']}>
                    <div className={styles.modal}>
                        <div className={styles['modal-header']}>{title}</div>
                        <div className={`${styles['modal-body']} form`}>
                            <div className="form-item">
                                <span>{body}</span>
                            </div>
                        </div>
                        <div className={styles['modal-buttons']}>
                            <button 
                                className="btn btn--outline"
                                onClick={() => setIsOpen(false)}
                                disabled={pending}
                            >
                                No
                            </button>
                            <button 
                                className="btn"
                                type='button'
                                onClick={() => deleteCompany(companyId)}
                                disabled={pending}
                            >
                                Yes, remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
