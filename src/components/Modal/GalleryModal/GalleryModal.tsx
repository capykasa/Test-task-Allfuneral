import styles from '../Modal.module.scss'
import { useEffect, useRef } from 'react'
import { Dispatcher } from '@/utility/types/Dispatcher'
import Cross from '@/assets/icons/cross.svg'

interface GalleryModalProps {
    isOpen: boolean
    setIsOpen: Dispatcher<boolean>
    imageSrc: string
    imageName: string
}

export const GalleryModal = ({ isOpen, setIsOpen, imageSrc, imageName }: GalleryModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscapeKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        window.addEventListener('keydown', handleEscapeKeyDown)

        return () => {
            window.removeEventListener('keydown', handleEscapeKeyDown)
        }
    }, [])

    return (
        <>
            {isOpen && (
                <div className={styles['modal-wrapper']}>
                    <div className={`${styles.modal} ${styles['modal--gallery']}`} ref={modalRef}>
                        <button
                            className={`${styles['modal-close-btn']} btn btn--icon btn--outline`}
                            onClick={() => setIsOpen(false)}
                        >
                            <Cross width={16} height={16} />
                        </button>
                        <div className={styles['modal-image']}>
                            <img src={imageSrc} alt={imageName} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
