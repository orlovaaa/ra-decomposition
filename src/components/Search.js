//Компонент поиска

export default function Search() {
    return (
        <div className='main__search'>
            <form className="main__search-form">
                <img src="https://koshka.top/uploads/posts/2021-12/1639874416_2-koshka-top-p-morda-koshki-3.jpg" className="main__search-img" alt='...'/>
                <input type="text" className="main__search-input" placeholder="Поиск" aria-label="Search" aria-describedby="button-search"/>
                <button className="main__search-btn" type="button" id="button-search"> </button>
            </form>
            <div className="main__search-text" id="basic-addon4">
                <span> </span> <a href='#' className='main__search-link'></a></div>
        </div>
    )
}