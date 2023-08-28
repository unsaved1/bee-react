import './appWeeklyTop.scss';
import AppCatalog from '../appCatalog/AppCatalog';
import AppFilter from '../appFilter/AppFilter';


const AppWeeklyTop = () => {
    return (
        <section className="weekly-top">
            <div className="container">
                <h2 className='title weekly-top__title'>ТОВАРЫ НЕДЕЛИ</h2>
                <AppFilter/>
                <AppCatalog catalogName='BeeGoods'/>
            </div>
        </section>
    )
};

export default AppWeeklyTop;