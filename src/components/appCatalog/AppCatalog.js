import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import AppCardItem from "../appCardItem/AppCardItem";

import catalog from '../../resources/db/db.json';
import someImg from '../../resources/images/bee-item.png';

const AppCatalog = ({catalogName = null, itemImg = someImg}) => {
    const [items, setItems] = useState([]);

    const catalogItemsData = new Promise((resolve, reject) => {
        catalog.catalogCategory.map(category => {
            if (category.categoryName === catalogName) {
                resolve(category.categoryItems)
            }
        }) 
    })

    const onItemsLoad = (itemList) => {
        setItems(items => [...itemList]);
    }

    useEffect(() => {
        catalogItemsData.then(onItemsLoad)   
    }, [])

    const setAllItems = (items) => {
        const itemsArr = items.map(({itemName, itemPrice, itemDescr}, i) => {
            return  <Grid key={i} item>
                        <AppCardItem boxShadow={false} src={itemImg} title={itemName} price={itemPrice} descr={itemDescr}/>
                    </Grid>
        })

        console.log(itemsArr)
        return [...itemsArr]
    }

    const content = setAllItems(items);

    return (
        <section style={{
            padding: '30px 0 45px 0'
        }} className="catalog">
            <div className="container">
                <h2>FILTER</h2>
                <Grid 
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