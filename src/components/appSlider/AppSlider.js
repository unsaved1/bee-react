import './AppSlider.scss';
import { useEffect, useState } from "react";
// import sliderArrow from '../../resources/icons/slider_arrow.svg';
const sliderArrow = <svg width="83" height="36" viewBox="0 0 83 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81 34L41.5 2L2 34" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>;

const AppSlider = () => {
    const [items, setItems] = useState(['https://thumb.tildacdn.com/tild3338-3563-4237-b466-323036663935/-/format/webp/photo_2022-04-22_17-.jpg', 'https://thumb.tildacdn.com/tild3132-6461-4139-b438-666239626331/-/format/webp/photo_2022-04-22_17-.jpg', 'https://thumb.tildacdn.com/tild6564-6339-4037-a439-623861356331/-/format/webp/photo_2022-04-22_17-.jpg']);
    const [slideIndex, setSlideIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);


    useEffect(() => {
        if (autoPlay) {
            const autoPlaySlider = setInterval(() => {
                setSlideIndex((current) => {
                    const res = current === items.length - 1 ? 0 : current + 1;
                    return res;
                })
            }, 2000)
            return () => clearInterval(autoPlaySlider);
        } else {
            console.log('stop');
        }       
    }, [autoPlay])

    const width = {
        'large': 1140,
        'medium': 720,
        'small': 540,
        'litle': 280
    }

    const setItemWidth = () => {
        if (window.innerWidth > 992) {
            return width.large;
        }
        if (window.innerWidth <= 576) {
            return window.innerWidth - 40;
        } 
        if (window.innerWidth <= 768) {
            return width.small;
        }
        if (window.innerWidth <= 992) {
            return width.medium;
        } 
        
    }

    const itemWidth = setItemWidth();

    const setAllImg = () => {
        const imgArr = items.map(item => {
            return (
                <div style={{width: `${itemWidth}px`}} className='slider__item' key={item}>
                      <img style={{width: `${itemWidth}px`}} src={item} alt={item}/>
                </div>
            )
        });
        return [...imgArr];
    };

    const content = setAllImg();
    
    const goToPrev = (current) => {
        setAutoPlay(false);
        if (current <= 0) {
            setSlideIndex(slideIndex => slideIndex = items.length - 1);
        } else {
            setSlideIndex(slideIndex => slideIndex - 1)
        }
    };

    const goToNext = (current) => {
        setAutoPlay(false);    
        if (current >= items.length - 1) {
            setSlideIndex(slideIndex => slideIndex = 0);
        } else {
            setSlideIndex(slideIndex => slideIndex + 1)   

        }
    };

    return (
        <div className="slider">
            <div style={{transform: `translateX(-${slideIndex * itemWidth}px)`, width: `${items.length * itemWidth}px`}} className="slider__inner">
                {content}
            </div>
            <button onClick={() => goToPrev(slideIndex)} data-arrow='prev' className="slider__arrow slider__arrow_prev">
                {sliderArrow}
            </button>
            <button onClick={() => goToNext(slideIndex)} data-arrow='next' className="slider__arrow slider__arrow_next">
                {sliderArrow}
            </button>
        </div>
    )
};



export default AppSlider;