import { Grid } from "@mui/material";
import AppCardItem from "../appCardItem/AppCardItem";

const AppCatalog = () => {
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
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                        <Grid item>
                            <AppCardItem boxShadow={false}/>
                        </Grid>
                </Grid>
            </div>
        </section>
    )
};

export default AppCatalog;