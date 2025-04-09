import styles from './PageHeader.module.scss'
import Pencil from '@/assets/icons/pencil.svg'
import Trash from '@/assets/icons/trash.svg'
import BackButton from '../BackButton/BackButton'
import { TCompany } from '../../types/data'
import { useEffect, useState } from 'react'
import { RenameModal } from '../Modal/RenameModal/RenameModal'
import { DeleteModal } from '../Modal/DeleteModal/DeleteModal'

interface PageHeaderProps {
    company?: TCompany
}

export const PageHeader = ({ company }: PageHeaderProps) => {
    const [companyName, setCompanyName] = useState('Organizations')
    const [modalRenameIsOpen, setModalRenameIsOpen] = useState(false)
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false)

    useEffect(() => {
        if (company?.name) setCompanyName(company.name)
    }, [company])

    return (
        <div className={styles['page-header']}>
            <BackButton />
            <h2 className={styles['page-header-title']}>{companyName}</h2>
            <div className={styles['page-header-buttons']}>
                <button
                    className={`${styles['edit-btn']} btn btn--icon btn--transparent`}
                    onClick={() => setModalRenameIsOpen(true)}
                >
                    <Pencil width={20} height={20} />
                </button>
                <button
                    className={`${styles['delete-btn']} btn btn--icon btn--transparent`}
                    onClick={() => setModalDeleteIsOpen(true)}
                >
                    <Trash width={20} height={20} />
                </button>
            </div>

            {company && (
                <>
                    <RenameModal
                        isOpen={modalRenameIsOpen}
                        setIsOpen={setModalRenameIsOpen}
                        title="Specify the Organization's name"
                        body={company.name}
                        companyId={company.id}
                        setCompanyName={setCompanyName}
                    />
                    <DeleteModal
                        isOpen={modalDeleteIsOpen}
                        setIsOpen={setModalDeleteIsOpen}
                        title="Remove the Organization?"
                        body="Are you sure you want to remove this Organozation?"
                        companyId={company.id}
                    />
                </>
            )}
        </div>
    )
}
