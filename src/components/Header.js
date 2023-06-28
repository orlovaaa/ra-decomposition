import NewsTabs from './NewsTabs'
import NewsList from './NewsList'
import Currency from './Currency'
import Advertising from './Advertising'

//Header отвечает за отображение верхней дополнительной информации.
//Разбивается на компоненты NewTabs, NewList, Currency и блок рекламы Advertising

export default function Header({data}) {
    return (
        <div className="header">
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__news'>
                        <NewsTabs tabs={data.tabs}/>
                        <NewsList list={data.list}/>
                        <Currency list={data.currency}/>
                    </div>
                    <div className='header__info'>
                        <Advertising title=' ' img={'https://github.com/orlovaaa/ra-cards/blob/main/src/img/Image.jpg?raw=true'}>
                            <a className='header__info-link' href="#"> </a>
                        </Advertising>
                    </div>  
                </div>
            </div>
        </div>
    )
}