import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppCatalog from "../appCatalog/AppCatalog";
import AppFooter from "../appFooter/AppFooter";

import itemTeaImg from '../../resources/images/tea-item.png';

const TeaPage = () => {
    return (
        <>
            <AppAnotherPromo 
                bg='HJF2-7XfRuQ'
                title='ЧАЙНАЯ ПРОДУКЦИЯ' 
                text={['Листовой или гранулированный чай.', 'А также, специальный чай для разных потребностей.']}/>
            <AppCatalog catalogName='TeaGoods' itemImg={itemTeaImg}/>
            <AppFooter/>
        </>
    )
};

export default TeaPage;