import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppCatalog from "../appCatalog/AppCatalog";
import AppFooter from "../appFooter/AppFooter";

import itemTeaImg from '../../resources/images/tea-item.png';

import secondBg from '../../resources/images/tea-bg.jpg';

const TeaPage = () => {
    return (
        <>
            <AppAnotherPromo 
                bg='HJF2-7XfRuQ'
                secondBg={secondBg}
                title='ЧАЙНАЯ ПРОДУКЦИЯ' 
                text={['Листовой или гранулированный чай.', 'А также, специальный чай для разных потребностей.']}/>
            <AppCatalog catalogName='TeaGoods' itemImg={itemTeaImg} categoryValues={['чай', 'чайная продукция']}/>
            <AppFooter/>
        </>
    )
};

export default TeaPage;