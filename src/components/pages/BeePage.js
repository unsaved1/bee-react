import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppCatalog from "../appCatalog/AppCatalog";
import AppFooter from "../appFooter/AppFooter";



const BeePage = () => {
    return (
        <>
            <AppAnotherPromo 
                bg='_AYhRpS8Mz8'
                title='МЕДОВАЯ ПРОДУКЦИЯ'
                text={['Различные виды меда, настойки, соты, пыльца и не только.', 'В нашем каталоге множество различной медовой продукции.']}/>
            <AppCatalog catalogName='BeeGoods'/>
            <AppFooter/>
        </>
    )
};

export default BeePage;