const AppIframeBg = ({url}) => {
    let src;
    const videoSrc = `https://www.youtube.com/embed/${url}?controls=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://mishinapaseka.ru&amp;playlist=${url}&amp;mute=1`
    
    const playerStyle = {
        position: 'absolute', 
        top: '0', 
        left: '0', 
        height: '100%', 
        width: '100%', 
        zIndex: '-1', 
        overflow: 'hidden'
    }


    const iframeStyle = {
        width: '100%', 
        height: '100%', 
        scale: '150%', 
        background: '#000'
    };
    
    if (/static/.test(url)) {
        src = null;
        playerStyle.background = `url(${url}) center center/cover no-repeat`;
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