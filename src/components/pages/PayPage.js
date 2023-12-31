import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppHowOrder from "../appHowOrder/AppHowOrder";
import AppDelivery from "../appDelivery/AppDelivery";
import AppFooter from "../appFooter/AppFooter";

import secondBg from '../../resources/images/main-bg.png';

const PayPage = () => {
    return (
        <>
            <AppAnotherPromo
                bg='_AYhRpS8Mz8'
                secondBg={secondBg}
                title='СПОСОБЫ ОПЛАТЫ'
                text={['Оплачивайте любым удобным для Вас способом.', 'Возможные способы оплаты можете уточнить у менеджера.']}/>
            <AppHowOrder/>
            <AppDelivery/>
            <AppFooter/>
        </>
    )
};

export default PayPage;
