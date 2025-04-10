import styles from '../Modal.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dispatcher } from '@/utility/types/Dispatcher'
import { StoreContext } from '@/index'
import { TOKEN_KEY } from '@/consts'

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
    const modalRef = useRef<HTMLDivElement>(null)
    const store = useContext(StoreContext)
    const [pending, setPending] = useState(false)
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: { name: body, id: companyId },
    })
    
    useEffect(() => {
        const handleEscapeKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        window.addEventListener('keydown', handleEscapeKeyDown)

        return () => {
            window.removeEventListener('keydown', handleEscapeKeyDown)
        }
    }, [])

    const renameCompany: SubmitHandler<FormData> = async data => {
        setPending(true)
        try {
            await store.api.companies.update(localStorage.getItem(TOKEN_KEY), data)
                .then(result => {
                    setCompanyName(result.data.name)
                    setIsOpen(false)
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
                    <div className={styles.modal} ref={modalRef}>
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
