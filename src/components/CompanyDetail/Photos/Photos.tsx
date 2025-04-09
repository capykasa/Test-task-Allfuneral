import styles from '../CompanyDetail.module.scss'
import AddPhoto from '@/assets/icons/add-photo.svg'
import Trash from '@/assets/icons/trash.svg'
import { GalleryModal } from '@/components/Modal/GalleryModal/GalleryModal'
import { StoreContext } from '@/index'
import { TCompany, TCompanyPhoto } from '@/types/data'
import { useContext, useRef, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

interface PhotosProps {
    company: TCompany
}

export const Photos = ({ company }: PhotosProps) => {
    const store = useContext(StoreContext)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [photos, setPhotos] = useState<TCompanyPhoto[]>(company.photos)
    const [pending, setPending] = useState(false)
    const [modalGalleryIsOpen, setModalGalleryIsOpen] = useState(false)
    const [currentPhoto, setCurrentPhoto] = useState(photos[0])

    const openFullPhoto = (photo: TCompanyPhoto) => {
        setCurrentPhoto(photo)
        setModalGalleryIsOpen(true)
    }

    const addPhoto: SubmitHandler<File> = async data => {
        setPending(true)
        try {
            await store.api.gallery
                .add(localStorage.getItem('token'), company.id, data)
                .then(result => setPhotos([...photos, result.data]))
                .catch(error => console.error(error.response.data.error))
        } catch (error) {
            console.error(error)
        } finally {
            setPending(false)
            fileInputRef.current.value = ''
        }
    }

    const deletePhoto: SubmitHandler<string> = async data => {
        setPending(true)
        try {
            await store.api.gallery.delete(localStorage.getItem('token'), company.id, data)
                .then(() => setPhotos(photos.filter(photo => photo.name !== data)))
                .catch(error => console.error(error.response.data.error))

        } catch (error) {
            console.error(error)
        } finally {
            setPending(false)
        }
    }

    return (
        <div className={`${styles['detail-info']} ${styles['detail-gallery']}`}>
            <div className={styles['detail-info__header']}>
                <div className={styles['detail-info__header-title']}>Photos</div>
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="btn btn--outline btn--small"
                    disabled={pending}
                >
                    <AddPhoto width={16} height={16} />
                    <span>Add</span>
                    <input
                        onChange={event => addPhoto(event.target?.files?.[0])}
                        type="file"
                        ref={fileInputRef}
                        hidden
                    />
                </button>
            </div>
            <div className={styles['detail-gallery__body']}>
                {photos.length > 0 && (
                    <div className={styles['detail-gallery__list']}>
                        {photos.map(photo => (
                            <div key={photo.name} className={styles['detail-gallery__item']}>
                                <img src={photo.thumbpath} alt={photo.name} onClick={() => openFullPhoto(photo)} />
                                <button
                                    onClick={() => deletePhoto(photo.name)}
                                    className={`${styles['delete-btn']} btn btn--icon btn--small`}
                                >
                                    <Trash width={16} height={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <GalleryModal
                    isOpen={modalGalleryIsOpen}
                    setIsOpen={setModalGalleryIsOpen}
                    imageSrc={currentPhoto.filepath}
                    imageName={currentPhoto.name}
                />
            </div>
        </div>
    )
}
