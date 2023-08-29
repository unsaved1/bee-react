import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import AppCardItem from "../appCardItem/AppCardItem";
import AppFilter from '../appFilter/AppFilter';

import catalog from '../../resources/db/db.json';
import someImg from '../../resources/images/bee-item.png';

import {CircularProgress} from "@mui/material";

const AppCatalog = (
                    {   catalogName = null, 
                        itemImg = someImg, 
                        categoryValues = [], 
                        boxShadow = false}) => {

            
    const [items, setItems] = useState([]);
    const [term, setTerm] = useState('');
    const [filterProp, setFilterProp] = useState('без категории');
    const [sortingProp, setSortingProp] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        catalogItemsData
            .then(onItemsLoad)
    }, [])


    const onItemsLoad = (itemList) => {
        setItems((items) => [...itemList]);
        setLoading(false);
    }
    
    const catalogItemsData = new Promise((resolve, reject) => {
        catalog.catalogCategory.map(category => {
            if (category.categoryName === catalogName) {
                resolve(category.categoryItems)
            }
            return category.categoryItems;
        }) 
    })


    
    
    const onUpdateFilter = (e) => {
        const target = e.currentTarget; 
        setFilterProp(target.value);
    };

    const filterItems = (items, filterProp) => {
        if (filterProp === 'без категории') {
            return items;
        } 

        return items.filter(item => {
            return item.itemProdName === filterProp;   
        })
    }




    const onUpdateSearch = (e) => {
        const targetValue = e.currentTarget.previousSibling.value;
        setTerm(targetValue);
 
    };

    const searchItems = (items, term) => {
        if (term === '') {
            return items;
        } 

        return items.filter(item => {
            return item.itemName.indexOf(term) > -1;   
        })
    };



    const onUpdateSorting = (e) => {
        const target = e.currentTarget;
        setSortingProp(target.value);
    }

    const sortByFieldPriceToUp = (fieldName) => {
        return (a, b) => +a[fieldName] > +b[fieldName] ? 1 : -1; 
    }
    const sortByFieldPriceToLow = (fieldName) => {
        return (a, b) => +a[fieldName] < +b[fieldName] ? 1 : -1; 
    }

    const sortByFieldName = (fieldName) => {
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }

    const sortByFieldNameReverse = (fieldName) => {
        return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
    }

    

    const sortItems = (items, sortingProp) => {
        switch (sortingProp) {
            case '':
                return items;
            case 'Порядок: по умолчанию':
                return items;
            case 'Цена: по возрастанию': 
                return items.slice().sort(sortByFieldPriceToUp('itemPrice'));
            case 'Цена: по убыванию': 
                return items.slice().sort(sortByFieldPriceToLow('itemPrice'));
            case 'Название: А—Я': 
                return items.slice().sort(sortByFieldName('itemName'));
            case 'Название: Я—А': 
                return items.slice().sort(sortByFieldNameReverse('itemName'));
            case 'Порядок: сначала новые': 
                return items.slice().sort(sortByFieldName('itemName'));
            case 'Порядок: сначала старые': 
                return items.slice().sort(sortByFieldNameReverse('itemName'));
            default:
                console.log('Нет совпадений')
        }
    };


    const setAllItems = (items) => {
        const itemsFiltered = sortItems(filterItems(searchItems(items, term), filterProp), sortingProp);
        
        if (itemsFiltered.length === 0) {
            return (
                <div style={{height: 400, display: 'flex', alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}} className="catalog__empty-items">
                    <h3 className="catalog__title-empty">По данному запросу ничего не найдено</h3>
                </div>
            )
        }
        const itemsArr = itemsFiltered.map(({itemName, itemPrice, itemDescr}, i) => {
            return  <Grid key={i} item>
                        <AppCardItem boxShadow={boxShadow} src={itemImg} title={itemName} price={itemPrice} descr={itemDescr}/>
                    </Grid>
        })
        return [...itemsArr]
    }

    const spinner = loading ? <CircularProgress color='primary'/> : null;
    const content = setAllItems(items);

    return (
        <section style={{
            padding: '30px 0 45px 0',
            minHeight: 800
        }} className="catalog">
            <div className="container">
                <AppFilter searchFn={onUpdateSearch} filterFn={onUpdateFilter} sortingFn={onUpdateSorting} categoryValues={categoryValues} catalogData={items}/>
                <Grid 
                    sx={{position: 'relative'}}
                    display='grid'
                    gridTemplateColumns='repeat(auto-fit, 360px)'
                    gridTemplateRows='repeat(auto-fit, 780px)'
                    gap='20px'>
                     {content}
                     {spinner}
                </Grid>
            </div>
        </section>
    )
};

export default AppCatalog;