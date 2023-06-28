//Компонент карточек Footer

export default function Card({title, children}) {
    return (
        <div className="footer__card">
            <div className="footer__card-inner">   
                <div className="footer__card-box">
                    <h5 className="footer__card-title">{title}</h5>
                    {children}
                </div>
            </div>
        </div>
    )
}