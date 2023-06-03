import style from '../Header/Header.module.css'

export default function Header ({menu}) {

    return (
        <header>
            <ul className={style.headerUl}>
                {
                    menu.map(element => {
                        return (
                            <li key={element.id}>{element.title}</li>
                        )
                    })
                }
            </ul>
        </header>
    )
}