import styles from '../Modal.module.scss'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatcher } from '@/utility/types/Dispatcher'
import { StoreContext } from '@/index'
import { TCompany } from '@/types/data'

interface RenameModalProps {
    isOpen: boolean
    setIsOpen: Dispatcher<boolean>
    title: string
    body: string
    companyId: string
    setCompanyName: Dispatcher<string>
}

type FormData = {
    name: string
    id: string
}

export const RenameModal = ({ isOpen, setIsOpen, title, body, companyId, setCompanyName }: RenameModalProps) => {
    const store = useContext(StoreContext)
    const [pending, setPending] = useState(false)
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: { name: body, id: companyId },
    })

    const renameCompany: SubmitHandler<FormData> = async data => {
        setPending(true)
        try {
            await store.api.companies.update(localStorage.getItem('token'), data)
                .then(result => setCompanyName(result.data.name))
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
                                <input type="text" {...register('name')} />
                            </div>
                        </div>
                        <div className={styles['modal-buttons']}>
                            <button
                                className="btn btn--outline"
                                onClick={() => setIsOpen(false)}
                                disabled={pending}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn"
                                onClick={handleSubmit(renameCompany)}
                                disabled={pending}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
