import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppCatalog from "../appCatalog/AppCatalog";
import AppFooter from "../appFooter/AppFooter";

const TeaPage = () => {
    return (
        <>
            <AppAnotherPromo 
                bg='HJF2-7XfRuQ'
                title='ЧАЙНАЯ ПРОДУКЦИЯ' 
                text={['Листовой или гранулированный чай.', 'А также, специальный чай для разных потребностей.']}/>
            <AppCatalog/>
            <AppFooter/>
        </>
    )
};

export default TeaPage;