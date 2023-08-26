import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__producer">
                        <span>Производитель:</span> <br />
                        КРЕСТЬЯНСКОЕ (ФЕРМЕРСКОЕ) ХОЗЯЙСТВО <br />
                        ЖДАН МИХАИЛ СЕРГЕЕВИЧ <br />
                        ИНН: 422000438049 <br />
                        ОГРНИП: 317420500041419
                    </p>
                        
                    <ul className="footer__menu">
                        <h2 className="footer__menu-title">МЕНЮ</h2>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Оплата и доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Грибная продукция</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Сертификаты</a></li>
                    </ul>
                    
                    <ul className="footer__contacts">
                        <h2 className="footer__contacts-title">КОНТАКТЫ</h2>
                        <li>
                            <p>
                                WhatsApp: <br />
                                <a href="#">+7 (906) 983-14-82</a>
                            </p>
                        </li>
                       
                        <li>
                            <p>
                                Email: <br />  
                                <a href="#">zakaz@gribsale.ru</a>
                            </p>
                        </li>
                       
                        <li>
                            <p>
                                Telegram-канал: <br />
                                <a href="#">https://t.me/mishinapaseka</a>
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default AppFooter;