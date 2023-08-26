import AppHeader from "../appHeader/AppHeader";
import contactsBg from '../../resources/images/main-bg.png';
import { Link } from "react-router-dom";

const AppContactsPromo = ({ bg = null, 
                            title = null}) => {

    const promoStyle = {
        position: 'relative',
        background: `url(${contactsBg}) center center/cover no-repeat`,
        minHeight: '80vh'
    }

    const filterBgStyle = {
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',

        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1',

        width: '100%',
        height: '100%'
    }

    const titleStyle = {
        textTransform: 'uppercase',
        fontSize: 104,
        fontWeight: '600',
        textAlign: 'center',
        
        position: 'relative',
        zIndex: '5'
    }

    const textWrapperStyle = {
        maxWidth: 700,
        margin: '0 auto',
        marginTop: 54,

        position: 'relative',
        zIndex: '5'
    }

    const textStyle = {
        textAlign: 'center',

        fontSize: 22,
        fontWeight: '300',
        lineHeight: '1.55',
    }   

    return (
        <section style={promoStyle} className="promo">
            <AppHeader/>
            <div style={filterBgStyle} id="filterBg"></div>
            <h1 style={titleStyle}>
                    {title}</h1>

            <div style={textWrapperStyle}>
                <p id="subtitle" style={textStyle}>
                    Производитель: <br />
                    КРЕСТЬЯНСКОЕ (ФЕРМЕРСКОЕ) ХОЗЯЙСТВО <br />
                    ЖДАН МИХАИЛ СЕРГЕЕВИЧ <br />

                    <br />
              
                    ИНН: 422000438049 <br />
                    ОГРНИП: 317420500041419 <br />

                    <br />

                    <span style={{fontSize: 22, fontWeight: '300', lineHeight: '1.55', color: '#f7ff61'}}>
                    Написать нам в WhatsApp <br />
                    Написать нам в Viber <br />
                    </span>

                    <br />

                    E-mail: zakaz@mishinapaseka.ru <br />

                    <br />

                    Мы ВКонтакте - <Link to='https://vk.com/mishinapaseka'>https://vk.com/mishinapaseka</Link>
                </p>
            </div>
        </section>
    )
};

export default AppContactsPromo;