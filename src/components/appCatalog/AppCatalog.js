import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import AppCardItem from "../appCardItem/AppCardItem";
import AppFilter from '../appFilter/AppFilter';

import catalog from '../../resources/db/db.json';
import someImg from '../../resources/images/bee-item.png';

const AppCatalog = ({catalogName = null, itemImg = someImg, categoryValues = [], boxShadow = false}) => {
    const [items, setItems] = useState([]);
    const [term, setTerm] = useState('');
    
    const catalogItemsData = new Promise((resolve, reject) => {
        catalog.catalogCategory.map(category => {
            if (category.categoryName === catalogName) {
                resolve(category.categoryItems)
            }
        }) 
    })

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

    const onItemsLoad = (itemList) => {
        setItems((items) => [...itemList]);
        
    }

    useEffect(() => {
        catalogItemsData
            .then(onItemsLoad)
            .then(searchItems(items, term))
    }, [])


    const setAllItems = (items) => {
        const itemsFiltered = searchItems(items, term);
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

    const content = setAllItems(items);

    return (
        <section style={{
            padding: '30px 0 45px 0',
            minHeight: 800
        }} className="catalog">
            <div className="container">
                <AppFilter func={onUpdateSearch}  categoryValues={categoryValues} catalogData={items}/>
                <Grid 
                    sx={{position: 'relative'}}
                    display='grid'
                    gridTemplateColumns='repeat(auto-fit, 360px)'
                    gridTemplateRows='repeat(auto-fit, 780px)'
                    gap='20px'>
                     {content}
                </Grid>
            </div>
        </section>
    )
};

export default AppCatalog;