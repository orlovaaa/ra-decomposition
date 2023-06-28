//Компонент рекламного блока

export default function Advertising({img, title, children}) {
    return (
        <div className="media">
            <img src={img} className="media__img" alt="..."/>
            { title && children && 
                <div className="media__inner">
                    <h5 className="media__text">{title}</h5>
                    {children}
                </div>
            }
        </div>
    )
}

