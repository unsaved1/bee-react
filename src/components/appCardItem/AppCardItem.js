import { Box, Button, ThemeProvider } from '@mui/material';
import AppBtnTheme from '../appBtnTheme/AppBtnTheme';

import itemImg from '../../resources/images/bee-item.png';


const AppCardItem = ({boxShadow = true, src = itemImg, title = null, price = null, descr = null}) => {

    const cardItemStyle = {
        position: 'relative',
        padding: window.innerWidth <= 576 ? '0 20px 20px 20px' : '0 40px 40px 40px',

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
        width: window.innerWidth <= 576 ? 320 : 340,
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
        width: '    100%',
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
        marginTop: 10,
        width: '240px',

        display: 'flex',
        justifyContent: 'space-between'
    }

    
    return (
        <Box
            sx={cardItemStyle}>
                <div 
                    style={imgWrapperStyle}>
                        <img
                            style={imgStyle} 
                            src={src}
                            alt="beeItem"/>
                </div>
                <h3 style={{fontWeight: '700', textAlign: 'center', height: 68, fontSize: 18}}>{title}</h3>
                <h3 style={{marginTop: 14}}>{price} р.<span style={{opacity: '.5', fontSize: '.8em'}}>/ 1 шт</span></h3>
                <p style={{height: 140, fontSize: 12, fontWeight: 300, marginTop: 20}}>
                    {descr}
                </p>

                <ThemeProvider theme={AppBtnTheme}>
                    <Button sx={descrBtnStyle}>Подробнее</Button>
                </ThemeProvider>

                <div style={btnsStyle}>  
                        <div
                            style={counterBtnStyle}>
                                <p>counter</p>
                        </div>

                    <Button sx={binBtnStyle} variant='outlined'>В корзину</Button>
                </div>                    
        </Box>
    )
};

export default AppCardItem;
