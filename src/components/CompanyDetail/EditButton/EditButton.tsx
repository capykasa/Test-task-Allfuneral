import Pencil from '@/assets/icons/pencil.svg'
import Check from '@/assets/icons/check.svg'
import Cross from '@/assets/icons/cross.svg'
import { useState } from 'react'
import { Dispatcher } from '@/utility/types/Dispatcher'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { RefformattingData, TCompany, TContactForm } from '@/types/data'

interface CheckChannelProps {
    isEdit: boolean
    setIsEdit: Dispatcher<boolean>
    handleSubmit: UseFormHandleSubmit<TContactForm | TCompany>
    refformattingData: Function
}

export const EditButton = ({ isEdit, setIsEdit, handleSubmit, refformattingData }: CheckChannelProps) => {
    const [pending, setPending] = useState(false)

    const changeIsEdit = (flag: boolean) => setIsEdit(flag)

    const onSubmit: SubmitHandler<TContactForm | TCompany> = async data => {
        setPending(true)

        refformattingData(data)

        try {
            console.log(data)
            setIsEdit(false)
        } catch {
            console.log(data)
        } finally {
            setPending(false)
        }
    }

    return (
        <>
            {!isEdit ? (
                <button onClick={() => changeIsEdit(true)} className="btn btn--outline btn--small">
                    <Pencil width={16} height={16} />
                    <span>Edit</span>
                </button>
            ) : (
                <>
                    <button onClick={handleSubmit(onSubmit)} disabled={pending} className="btn btn--outline btn--small">
                        <Check width={16} height={16} />
                        <span>Save changes</span>
                    </button>
                    <button
                        onClick={() => changeIsEdit(false)}
                        disabled={pending}
                        className="btn btn--outline btn--small"
                    >
                        <Cross width={16} height={16} />
                        <span>Cancel</span>
                    </button>
                </>
            )}
        </>
    )
}
