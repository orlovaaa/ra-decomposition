
//Компонент основных вкладок над строкой поиска

export default function MainTabs({tabs}) {
    return (
        <div className='main__tabs'>
            <ul className="main__tabs-list">
                {tabs.map(tab => {
                    return <li className="main__tabs-item">
                        <a className="main__tabs-link" href={tab.href}>{tab.title}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}