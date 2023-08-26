import { Box, Button, ThemeProvider } from '@mui/material';
import AppBtnTheme from '../appBtnTheme/AppBtnTheme';

import itemImg from '../../resources/images/bee-item.png';


const AppCardItem = ({boxShadow = true}) => {

    const cardItemStyle = {
        position: 'relative',

        width: '360px',
        height: '780px',
        padding: '0 40px 40px 40px',

        backgroundColor: '#fff',
        boxShadow: `${boxShadow ? '0px 0px 10px 0px rgba(0, 0, 0, 0.30)' : 'none'}`,
        transition: '0.4s all',
        '&:hover': {
        backgroundColor: '#Fff',
        boxShadow: '0px 20px 50px 0px rgba(0, 0, 0, 0.30)',
        },
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

    const imgWrapperStyle = {
        width: '360px',
        height: '400px'
    }

    const imgStyle = {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0'
    }

    const descrBtnStyle = {
        width: '230px',
        textTransform: 'capitalize',
        color: '#fff',
        background: '#ffa820',
        '&:hover': {background: '#ffa820', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'}
    }

    const counterBtnStyle = {
        width: '100px',
        height: '44px',
        padding: '5px',

        border: '1px solid rgb(119, 119, 119)',
        borderRadius: '10px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const binBtnStyle = {
        textTransform: 'capitalize',
        width: '120px',
        height: '45px',
        borderRadius: '10px',
        border: '1px solid #000',
        color: '#000',
        '&:hover': {border: '1px solid #ffa820', background: '#ffa820', color: '#fff', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)'}
    }

    const btnsStyle = {
        width: '230px',

        display: 'flex',
        justifyContent: 'space-between'
    }

    
    return (
        <Box
            sx={cardItemStyle}>
                <div 
                    style={imgWrapperStyle} 
                    className="weekly-top__img">
                        <img
                            style={imgStyle} 
                            src={itemImg}
                            alt="beeItem"/>
                </div>
                <h3 style={{fontWeight: '700', textAlign: 'center'}} className="weekly-top__item-name">Мёд с 5% трутневого молочка (гомогената)</h3>
                <h3 style={{marginTop: '12px'}} className="weekly-top__item-price">800 р.<span style={{opacity: '.5', fontSize: '.8em'}}>/ 1 шт</span></h3>
                <p className="weekly-top__descr">
                Трутневое молочко обладает мощным оздоровительным и омолаживающим действием, что объясняется его богатейшим биохимическим составом (370 мл)
                </p>

                <ThemeProvider theme={AppBtnTheme}>
                    <Button sx={descrBtnStyle}>Подробнее</Button>
                </ThemeProvider>

                <div style={btnsStyle}
                    className="weekly-top__buy-btns">  
                        <div
                            style={counterBtnStyle} 
                            className="weekly-top__counter">
                                <p>counter</p>
                        </div>

                    <Button sx={binBtnStyle} variant='outlined'>В корзину</Button>
                </div>                    
        </Box>
    )
};

export default AppCardItem;
