import './appHeader.scss';

import logo from '../../resources/images/logo.svg';
import facebook from '../../resources/icons/socials/facebook.svg';
import instagram from '../../resources/icons/socials/instagram.svg';
import pinterest from '../../resources/icons/socials/pinterest.svg';

import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>
            </Link>

            <nav className='header__nav'>
                <ul>
                    <li className='header__item'><Link to="/">Главная</Link></li>
                    <li className='header__item'><Link to="/beeProducts">Каталог</Link></li>
                    <li className='header__item'><Link to="/pay">Оплата и доставка</Link></li>
                    <li className='header__item'><Link to="/contacts">Контакты</Link></li>
                    <li className='header__item'><Link to="/teaProducts">Чайная продукция</Link></li>
                    <li className='header__item'><Link to="/reviews">Отзывы</Link></li>
                    <li className='header__item'><Link to="#">Сертификаты</Link></li>
                </ul>
            </nav>

            <ul className="header__social">
                <li className="header__social-item"><Link to="/">
                    <img src={instagram} alt="insta" />
                </Link></li>
                <li className="header__social-item"><Link to="/">
                    <img src={facebook} alt="facebook" />
                </Link></li>
                <li className="header__social-item"><Link to="/">
                    <img src={pinterest} alt="pinterest" />
                </Link></li>
                <li className="header__social-item"><Link to="/">
                    <img src={facebook} alt="facebook" />
                </Link></li>
            </ul>
        </div>
    )
};

export default AppHeader;