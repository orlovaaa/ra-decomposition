//Компонент вкладок новостей

export default function NewsTabs({tabs}) {
    return (
        <div className='header__tabs'>
            <ul className="header__tabs-list">
                {tabs.map(tab => {
                    return <li className="header__tabs-item">
                        <a className="header__tabs-link" href={tab.href}>
                            {tab.title}
                        </a>
                    </li>
                })}
            </ul>

        </div>  
    )
}