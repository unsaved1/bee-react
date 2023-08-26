import './appWeeklyTop.scss';
import AppCardItem from '../appCardItem/AppCardItem';


const AppWeeklyTop = () => {
    return (
        <section className="weekly-top">
            <div className="container">
                <h2 className='title weekly-top__title'>ТОВАРЫ НЕДЕЛИ</h2>
                <div className='weekly-top__filter'>filter</div>
                <div className="weekly-top__items">
                    <AppCardItem/>
                    <AppCardItem/>
                    <AppCardItem/>
                </div>
            </div>
        </section>
    )
};

export default AppWeeklyTop;