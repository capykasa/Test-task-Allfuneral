import styles from './BackButton.module.scss'
import Arrow from '@/assets/icons/arrow.svg'
import { useLocation, useNavigate } from 'react-router-dom'

function BackButton() {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            {location.pathname !== '/' && (
                <button
                    onClick={() => {
                        location.state?.from ? navigate(location.state.from) : navigate('/')
                    }}
                    className={`${styles['back-btn']} btn btn--icon btn--transparent`}
                >
                    <Arrow width={20} height={20} />
                </button>
            )}
        </>
    )
}

export default BackButton
