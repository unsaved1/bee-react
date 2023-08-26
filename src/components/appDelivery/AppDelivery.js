import './appDelivery.scss';
import { Box } from '@mui/material';

const AppDelivery = () => {
    const deliveryItemStyle = {
        width: '360px',
        height: '380px',
        padding: '30px 30px 40px 30px',

        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'
    }

    return (
        <section className="delivery">
            <div className="delivery__bg"></div>
            <h2 className="title delivery__title">СПОСОБЫ ДОСТАВКИ</h2>

            <div className="delivery__content">
                <div className="container">
                    <h3 className="delivery__subtitle">Мы осуществляем доставку нашей продукции по всей территории Российской Федерации.</h3>   

                    <div className="delivery__items">
                        <Box 
                            sx={deliveryItemStyle}>
                                <h4 className="delivery__item-name">ДОСТАВКА ПОЧТОЙ РОССИИ</h4>
                                <p className="delivery__item-descr">Доставка осуществляется почтой России в любой регион страны Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Вносится предоплата за товар и доставку</li>
                                </ul>
                                
                            </Box>
                       
                        <Box 
                            sx={deliveryItemStyle}>
                                <h4 className="delivery__item-name">СДЭК С ПРЕДОПЛАТОЙ ЗА ТОВАР</h4>
                                <p className="delivery__item-descr">Доставка СДЭК по России до пункта выдачи или до адреса. Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Предоплата за товар</li>
                                    <li className="delivery__item-point">Оплата за доставку при получении</li>
                                </ul>
                            </Box>
                        <Box 
                            sx={deliveryItemStyle}>
                                <h4 className="delivery__item-name">СДЭК С ПРЕДОПЛАТОЙ ЗА ДОСТАВКУ</h4>
                                <p className="delivery__item-descr">Доставка СДЭК по России до пункта выдачи или до адреса. Стоимость доставки рассчитывается индивидуально.</p>
                                <ul className="delivery__points">
                                    <li className="delivery__item-point">Предоплата за доставку (390р)</li>
                                </ul>
                            </Box>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default AppDelivery;