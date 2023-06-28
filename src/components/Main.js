import MainTabs from './MainTabs'
import Search from './Search'
import Advertising from './Advertising'

//Main содержит компонент основной строки поиска Search, вкладки MainTabs и блок рекламы

export default function Main({data}) {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__inner'>
                    <MainTabs tabs={data.tabs}/>
                    <Search />
                    <Advertising title=' ' img={'https://github.com/orlovaaa/ra-cards/blob/main/src/img/Image.jpg?raw=true'}>
                    </Advertising>             
                </div>
            </div>
        </div>
    )
}