import './appDelivery.scss';
import { Box, Grid } from '@mui/material';

const AppDelivery = () => {


    return (
        <section className="delivery">
            <div className="delivery__bg"></div>
            <h2 className="title delivery__title">СПОСОБЫ ДОСТАВКИ</h2>

            <div className="delivery__content">
                <div className="container">
                    <h3 className="delivery__subtitle">Мы осуществляем доставку нашей продукции по всей территории Российской Федерации.</h3>   

                    <Grid className="delivery__items">
                        <Box className='delivery__item'>
                                <h4 className="delivery__item-name">ДОСТАВКА ПОЧТОЙ РОССИИ</h4>
                                <p className="delivery__item-descr">Доставка осуществляется почтой России в любой регион страны Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Вносится предоплата за товар и доставку</li>
                                </ul>
                                
                            </Box>
                       
                        <Box className="delivery__item">
                                <h4 className="delivery__item-name">СДЭК С ПРЕДОПЛАТОЙ ЗА ТОВАР</h4>
                                <p className="delivery__item-descr">Доставка СДЭК по России до пункта выдачи или до адреса. Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Предоплата за товар</li>
                                    <li className="delivery__item-point">Оплата за доставку при получении</li>
                                </ul>
                            </Box>
                        <Box className="delivery__item">
                                <h4 className="delivery__item-name">СДЭК С ПРЕДОПЛАТОЙ ЗА ДОСТАВКУ</h4>
                                <p className="delivery__item-descr">Доставка СДЭК по России до пункта выдачи или до адреса. Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Предоплата за доставку (390р)</li>
                                </ul>
                            </Box>
                    </Grid>
                </div>
            </div>
        </section>
    )
};
export default AppDelivery;