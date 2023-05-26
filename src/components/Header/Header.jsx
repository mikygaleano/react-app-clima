

export default function Header ({menu}) {

    return (
        <header>
            <ul>
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