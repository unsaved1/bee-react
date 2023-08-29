import AppAbout from "../appAbout/AppAbout";
import AppDelivery from "../appDelivery/AppDelivery";
import AppFooter from "../appFooter/AppFooter";
import AppHowOrder from "../appHowOrder/AppHowOrder";
import AppPromo from "../appPromo/AppPromo";
import AppWeeklyTop from "../appWeeklyTop/AppWeeklyTop";


const MainPage = () => {
    return (
        <>
            <AppPromo bgUrl='_AYhRpS8Mz8'/>
            <AppWeeklyTop/>
            <AppAbout/>
            <AppHowOrder/>
            <AppDelivery/>
            <AppFooter/>
        </>
    )
};

export default MainPage;