import logo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} />

            <form className={styles.newTaskForm}>
                <input placeholder='Nova tarefa' />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}