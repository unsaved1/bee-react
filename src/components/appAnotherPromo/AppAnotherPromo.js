import AppHeader from "../appHeader/AppHeader";
import AppIframeBg from "../appIframeBg/AppIframeBg";

const AppAnotherPromo = ({  bg = null, 
                            title = null, 
                            text = [],
                            height = '80vh'}) => {

    const promoStyle = {
        position: 'relative',
        minHeight: `${height}`,
        background: `${bg}`, 
        overflow: 'hidden'
    }


    const titleStyle = {
        textTransform: 'uppercase',
        fontSize: 104,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 100,
        color: '#fff'
    }

    const textWrapperStyle = {
        maxWidth: 700,
        margin: '0 auto',
        marginTop: 54,
    }

    const textStyle = {
        textAlign: 'center',

        fontSize: 20,
        fontWeight: '300',
        lineHeight: '1.55',
        color: '#fff'
    }

    const svgStyle = {
        position: 'absolute',
        bottom: '0',
        zIndex: '4'
    }


    

    const textParagraphs = text.map((item, i) => {
        return (
            <p key={i} id="subtitle" style={textStyle}>
                    {item}
                </p>
        )
    }) 


    return (
        <section style={promoStyle} className="promo">
            <AppHeader/>
            <AppIframeBg url={bg}/>
            <div style={{position: 'relative'}} className="promo__wrapper">
                <h1 style={titleStyle}>
                        {title}</h1>

                <div style={textWrapperStyle}>
                    {textParagraphs}
                </div>
            </div>

            <svg style={svgStyle}  viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg"
                        fill='#fff'>
                        <polygon points="0 5, 100 5, 100 0"/></svg>
        </section>
    )
};

export default AppAnotherPromo;