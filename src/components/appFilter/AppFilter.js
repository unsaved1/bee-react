import './appFilter.scss';

const arrow =   <svg width="10" height="10" viewBox="0 0 83 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81 34L41.5 2L2 34" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

const AppFilter = () => {
    return (
        <div className="filter">
            <div className="container">
                <div className="filter__wrapper">
                    <div className="filter__category">
                        <span>Раздел</span>
                        {arrow}                  
                    </div>
                    <div className="filter__search"></div>
                    <div className="filter__sorting"></div>
                </div>
            </div>
        </div>
    )
};

export default AppFilter;