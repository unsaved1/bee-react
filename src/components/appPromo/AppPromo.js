import './appPromo.scss';

import AppHeader from '../appHeader/AppHeader';

import AppBtnTheme from '../appBtnTheme/AppBtnTheme';
import { Button, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

const AppPromo = () => {
    return (
        <section style={{bg: 'url("../../resources/images/main-bg.png") center center/cover no-repeat'}} className="promo">
             <AppHeader/>
            <div className="container">
               
                <h1 className="title promo__title">
                    ПРОДАЖА МЕДА, ПЧЕЛОПРОДУКЦИИ И ГРИБНОЙ ПРОДУКЦИИ <br />
                    <span>С ДОСТАВКОЙ ПО РОССИИ</span>
                </h1>

                <h2 className='promo__subtitle'>ИНТЕРНЕТ-МАГАЗИН "МИШИНА ПАСЕКА"</h2>
                <h2 className='promo__subtitle'><span>100% ЭКОЛОГИЧЕСКИ ЧИСТАЯ ПРОДУКЦИЯ ОТ <br /> ПРОИЗВОДИТЕЛЯ</span></h2>

                <div className="promo__btns">
                    <ThemeProvider theme={AppBtnTheme}>
                        <Link to='/beeProducts'><Button sx={{width: '200px', height: '60px', borderRadius: '10px', marginRight: '20px'}} color='primary' variant='contained'>Каталог</Button></Link>
                        <Link to='/teaProducts'><Button sx={{width: '300px', height: '60px', borderRadius: '10px'}} color='primary' variant='contained'>Чайная продукция</Button></Link>
                    </ThemeProvider>
                </div>
            </div>
        </section>
    )
};

export default AppPromo;