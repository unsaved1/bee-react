import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppCatalog from "../appCatalog/AppCatalog";
import AppFooter from "../appFooter/AppFooter";

import secondBg from '../../resources/images/main-bg.png';


const BeePage = () => {
    return (
        <>
            <AppAnotherPromo 
                bg='_AYhRpS8Mz8'
                secondBg={secondBg}
                title='МЕДОВАЯ ПРОДУКЦИЯ'
                text={['Различные виды меда, настойки, соты, пыльца и не только.', 'В нашем каталоге множество различной медовой продукции.']}/>
            <AppCatalog catalogName='BeeGoods' categoryValues={['мёд', 'медовая продукция']}/>
            <AppFooter/>
        </>
    )
};

export default BeePage;