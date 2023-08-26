import './AppSlider.scss';
import sliderArrow from '../../resources/icons/slider_arrow.svg';

import { useEffect, useState } from "react";
const AppSlider = ({width}) => {
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

    const setAllImg = () => {
        const imgArr = items.map(item => {
            return (
                <div className='slider__item' key={item}>
                      <img src={item} alt={item}/>
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
            <div style={{transform: `translateX(-${slideIndex * 1140}px)`}} className="slider__inner">
                {content}
            </div>
            <button onClick={() => goToPrev(slideIndex)} data-arrow='prev' className="slider__arrow slider__arrow_prev">
                <img src={sliderArrow} alt="prev"/>
            </button>
            <button onClick={() => goToNext(slideIndex)} data-arrow='next' className="slider__arrow slider__arrow_next">
                <img src={sliderArrow} alt="next"/>
            </button>
        </div>
    )
};



export default AppSlider;