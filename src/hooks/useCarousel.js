import { useEffect, useRef, useState } from 'react';

const useCarousel = () => {
  let interval;

  const carousel = useRef();
  const imgRef = useRef();

  const [isEnter, setIsEnter] = useState(false);

  const handleClickNext = () => {
    // I get the first element of the slider
    const firstElement = carousel?.current.childNodes[0];

    // Move the slider
    carousel.current.style.transition = 'all .3s ease-in-out';
    carousel.current.style.transform = `translateX(-${imgRef.current.offsetWidth}px)`;

    /* When the transition is finished, the function that move the first element
      of the slider to the end to create an infinite slider
      is executed */
    const finishTransition = () => {
      carousel.current.style.transition = 'none';
      carousel.current.style.transform = 'translateX(0px)';

      carousel.current.appendChild(firstElement);

      carousel.current.removeEventListener('transitionend', finishTransition);
    };

    carousel.current.addEventListener('transitionend', finishTransition);
  };

  const handleClickPrev = () => {
    // I get the last element of the slider
    const lastElement = carousel.current.childNodes[
      (carousel.current.childNodes.length - 1)
    ];

    /* The last element of the slider is inserted before the first element of
    the slider to create an infinite slider */
    carousel.current.insertBefore(lastElement, carousel.current.childNodes[0]);

    // Move the slider
    carousel.current.style.transition = 'none';
    carousel.current.style.transform = `translateX(-${imgRef.current.offsetWidth}px)`;

    setTimeout(() => {
      carousel.current.style.transition = 'all .3s ease-in-out';
      carousel.current.style.transform = 'translateX(-0px)';
    }, 30);
  };

  /* Every time the state changes, the useEffect is executed to stop
     the automatic slider or to resume it */
  useEffect(() => {
    if (!isEnter) {
      interval = setInterval(() => {
        handleClickNext();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isEnter]);

  return {
    carousel, imgRef, setIsEnter, handleClickNext, handleClickPrev,
  };
};

export default useCarousel;
