import Card from './Card'

//Footer отвечает за отображение нижней дополнительной информации. 
//Заполняется карточками Card

export default function Footer({data}) {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <Card title=''>
                        <ul className='footer__card-list'>
                            {data.listVisited.map(el => {
                                return <li className="footer__card-item">
                                    <a className='footer__card-link' href={el.href}>{el.text}</a>
                                </li>
                            })}
                        </ul>
                    </Card>
                    <Card title=''>
                        <ul className='footer__card-list'>
                            {data.listVisited.map(el => {
                                return <li className="footer__card-item">
                                    <a className='footer__card-link' href={el.href}>{el.text}</a>
                                </li>
                            })}
                        </ul>
                    </Card>

                    <Card title=''>
                        <ul className='footer__card-list'>
                            {data.listVisited.map(el => {
                                return <li className="footer__card-item">
                                    <a className='footer__card-link' href={el.href}>{el.text}</a>
                                </li>
                            })}
                        </ul>
                    </Card>

                </div>
            </div>
        </div>
    )
}