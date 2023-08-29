const AppIframeBg = ({url, secondBg = null, scale = '150%'}) => {
    let src;
    const videoSrc = `https://www.youtube.com/embed/${url}?controls=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://mishinapaseka.ru&amp;playlist=${url}&amp;mute=1`
    
    const playerStyle = {
        position: 'absolute', 
        top: '0', 
        left: '0', 
        height: '100%', 
        width: '100%', 
        overflow: 'hidden',

        animationName: 'fadeInBg', 
        animationDuration: '1s', 
    }


    const iframeStyle = {
        width: '100%', 
        height: '100%', 
        scale: scale, 
        background: '#000'
    };
    
    if (/static/.test(url) || window.innerWidth <= 992) {
        // src = null;
        playerStyle.background = `url(${secondBg}) center center/cover no-repeat`;
        iframeStyle.opacity = 0;
    } else {
        src = videoSrc;
    } 

    return (
        <div style={playerStyle} className="player">
            <iframe style={iframeStyle} src={src} allow="fullscreen" title='bg'></iframe>
        </div>
    )
};

export default AppIframeBg;