import './appHowOrder.scss';
import { Grid } from '@mui/material';
const AppHowOrder = () => {
    return (
        <section className="how-order">
            <div className="container">
                <h2 className="title how-order__title">КАК ЗАКАЗАТЬ В <br /> ИНТЕРНЕТ-МАГАЗИНЕ</h2>

                <Grid className='how-order__steps'>
                    <Grid className="how-order__item how-order__item_left" item xs>
                        <h3 className="how-order__item-name">Выбираете товар</h3>
                        <p className="how-order__item-descr">Добавляйте понравившейся товар в корзину</p>
                    </Grid>

                    <Grid className='how-order__item_empty' item xs/>
                    <Grid item xs className='how-order__item how-order__item_left how-order__item_empty'/>
                    
                    <Grid className="how-order__item" item xs>
                        <h3 className="how-order__item-name">Выбираете способ доставки</h3>
                        <p className="how-order__item-descr">Мы осуществляем доставку почтой России и СДЭК. Стоимость доставки рассчитывается индивидуально.</p>
                        <p className="how-order__item-descr">В случае выбора доставки через СДЭК вы можете оплатить товар при его получении в пункте выдачи. За доставку нужно будет внести предоплату.</p>
                    </Grid>

                    <Grid className="how-order__item how-order__item_left" item xs>
                        <h3 className="how-order__item-name">Отправляете заявку</h3>
                        <p className="how-order__item-descr">Заполняете и отправляете форму заказа.</p>
                    </Grid>

                    <Grid className='how-order__item_empty' item xs/>
                    <Grid item xs className='how-order__item how-order__item_left how-order__item_empty'/>

                    <Grid className="how-order__item" item xs>
                        <h3 className="how-order__item-name">Уточнение деталей заказа</h3>
                        <p className="how-order__item-descr">Мы связываемся с вами в рабочее время и уточняем детали заказа, оплаты и способах доставки. Рассчитываем стоимость доставки.</p>
                    </Grid>

                    <Grid className="how-order__item how-order__item_left" item xs>
                        <h3 className="how-order__item-name">Оплата и отправление товара</h3>
                        <p className="how-order__item-descr">Отправка товара осуществляется только при внесении полной или частичной предоплаты за доставку в случае выбора способа доставки через СДЭК</p>
                    </Grid>
                </Grid>

            </div>
        </section>
    )
};

export default AppHowOrder;