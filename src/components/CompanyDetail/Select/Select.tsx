import styles from './Select.module.scss'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Arrow from '@/assets/icons/arrow.svg'
import { Controller } from 'react-hook-form'
import { filterCheckboxes } from '@/utility/reformattingDataFields'

type SelectProps = {
    name: string
    control: any
    formValue: string | string[]
    options: string[]
    isMulti?: boolean
}

export const Select = ({ name, control, formValue, options, isMulti = false }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)

    const StringValue = Array.isArray(formValue) ? formValue.join(', ') : formValue

    const handleInputClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event
            if (target instanceof Node && !rootRef.current?.contains(target) && isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
                <div className={styles.select} ref={rootRef}>
                    <div className={styles['select-input']} onClick={handleInputClick}>
                        <input type="text" {...field} id={name} value={StringValue} onChange={() => onChange(value)} />
                        <Arrow width={8} height={16} />
                    </div>
                    {isOpen && (
                        <ul className={styles['select-list']}>
                            {options.map(item => (
                                <li
                                    className={`${styles['select-list__item']} ${isMulti && styles['select-list__item--checkbox']}`}
                                    key={item}
                                    value={item}
                                    onClick={() => {
                                        if (isMulti && Array.isArray(formValue)) {
                                            onChange(filterCheckboxes(formValue, item))
                                        } else {
                                            onChange(item)
                                            setIsOpen(false)
                                        }
                                    }}
                                >
                                    {isMulti && (
                                        <input
                                            type="checkbox"
                                            checked={formValue?.includes(item)}
                                            onChange={() => {
                                                if (Array.isArray(formValue)) {
                                                    onChange(filterCheckboxes(formValue, item))
                                                }
                                            }}
                                        />
                                    )}
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        />
    )
}
