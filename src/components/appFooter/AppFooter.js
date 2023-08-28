import { Link } from 'react-router-dom';
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
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/beeProducts">Каталог</Link></li>
                        <li><Link to="/pay">Оплата и доставка</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/teaProducts">Чайная продукция</Link></li>
                        <li><Link to="/reviews">Отзывы</Link></li>
                        <li><Link to="/">Сертификаты</Link></li>
                    </ul>
                    
                    <ul className="footer__contacts">
                        <h2 className="footer__contacts-title">КОНТАКТЫ</h2>
                        <li>
                            <p>
                                WhatsApp: <br />
                                +7 (906) 983-14-82
                            </p>
                        </li>
                       
                        <li>
                            <p>
                                Email: <br />  
                                zakaz@gribsale.rus
                            </p>
                        </li>
                       
                        <li>
                            <p>
                                Telegram-канал: <br />
                                <Link to="https://t.me/mishinapaseka">https://t.me/mishinapaseka</Link>
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default AppFooter;