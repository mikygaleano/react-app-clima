import style from '../Header/Header.module.css'

export default function Header ({menu}) {

    return (
        <header>
            <ul className={style.headerUl}>
                {
                    menu.map(element => {
                        return (
                            <li key={element.id}><a href={element.link}>{element.title}</a></li>
                        )
                    })
                }
            </ul>
        </header>
    )
}