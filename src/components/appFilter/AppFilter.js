import './appFilter.scss';
import { FormControl, NativeSelect } from '@mui/material';


const AppFilter = (
                    {   categoryValues = [], 
                        catalogData, 
                        searchFn, 
                        filterFn,
                        sortingFn}) => {


    let baseCategory = ['без категории'];

    const sortingValues = {
        baseSorting: 'Порядок: по умолчанию',
        priceSortingToUp: 'Цена: по возрастанию',
        priceSortingToLow: 'Цена: по убыванию',
        nameSorting: 'Название: А—Я',
        nameSortingReverse: 'Название: Я—А',
        dateSortingFromNew: 'Порядок: сначала новые',  
        dateSortingFromOld: 'Порядок: сначала старые', 
    }
           

    const setCategoryValues = () => {
        const allCategories = [baseCategory, ...categoryValues];  
        const categoryArr = allCategories.map((value, i) => {
            return <option value={value} key={i}>{value}</option>
        });


        return [...categoryArr];
    }; 

    const category = setCategoryValues();

    return (
        <div className="filter">
            <div className="container">
                <div className="filter__wrapper">
                    <div>
                        <FormControl className="filter__category">
                            <form action="#">
                                <NativeSelect onChange={e => filterFn(e)} variant='outlined' className='filter__category-select'>
                                    {category}
                                </NativeSelect>
                            </form>
                        </FormControl>
                    </div>
                    <div className="filter__sorting-search-wrapper">
                        <div className="filter__search">
                            <input type="text" placeholder='Поиск'/>
                            <button onClick={e => searchFn(e)} type="submit">
                                <svg className="t-store__search-icon js-store-filter-search-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88"> <path fill="#757575" d="M85 31.1c-.5-8.7-4.4-16.6-10.9-22.3C67.6 3 59.3 0 50.6.6c-8.7.5-16.7 4.4-22.5 11-11.2 12.7-10.7 31.7.6 43.9l-5.3 6.1-2.5-2.2-17.8 20 9 8.1 17.8-20.2-2.1-1.8 5.3-6.1c5.8 4.2 12.6 6.3 19.3 6.3 9 0 18-3.7 24.4-10.9 5.9-6.6 8.8-15 8.2-23.7zM72.4 50.8c-9.7 10.9-26.5 11.9-37.6 2.3-10.9-9.8-11.9-26.6-2.3-37.6 4.7-5.4 11.3-8.5 18.4-8.9h1.6c6.5 0 12.7 2.4 17.6 6.8 5.3 4.7 8.5 11.1 8.9 18.2.5 7-1.9 13.8-6.6 19.2z"></path></svg>
                            </button>
                        </div>
                        <FormControl>
                                <NativeSelect onChange={e => sortingFn(e)} sx={{fontSize: 14, fontWeight: '300', width: 210, height: 32,  ":after": {
                                    borderBottom: 'none'
                                }}} variant='outlined' className='filter__sorting'>
                                    <option value={sortingValues.baseSorting}>{sortingValues.baseSorting}</option>
                                    <option value={sortingValues.priceSortingToUp}>{sortingValues.priceSortingToUp}</option> 
                                    <option value={sortingValues.priceSortingToLow}>{sortingValues.priceSortingToLow}</option> 
                                    <option value={sortingValues.nameSorting}>{sortingValues.nameSorting}</option> 
                                    <option value={sortingValues.nameSortingReverse}>{sortingValues.nameSortingReverse}</option> 
                                    <option value={sortingValues.dateSortingFromNew}>{sortingValues.dateSortingFromNew}</option> 
                                    <option value={sortingValues.dateSortingFromOld}>{sortingValues.dateSortingFromOld}</option> 
                                </NativeSelect>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppFilter;