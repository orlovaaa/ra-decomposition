//Компонент блока валюты

export default function Currency({list}) {
    return (
        <div className='header__currency'>
            <ul className="header__currency-inner">
                {list.map(currency => {
                    return <li className="header__currency-item">
                        <a className="header__currency-link" href={currency.href}>{currency.text + ' ' + currency.value}</a>
                        <span className='header__currency-text'>{currency.delta}</span>
                    </li>
                })}
            </ul>
        </div>  
    )
}
