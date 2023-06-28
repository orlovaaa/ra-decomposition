//Компонент новостного списка в header

export default function NewsList({list}) {
    return (
        <ul className='header__news-list'>
            {list.map(el => {
                return <li className="header__news-item">
                    <img src={el.img} className="header__news-img" alt="..." />
                    <a href={el.href} className="header__news-link">{el.text}</a>
                </li>
            })}
        </ul>
    )
}