import { useEffect, useState } from 'react';

export const useWindowInfo = () => {
  const [viewPort, setViewPort] = useState('');
  const getCurrentDimension = () => {
    if (window.innerWidth <= 480) {
      setViewPort('mobile');
    } else if (window.innerWidth <= 900) {
      setViewPort('tablet');
    } else {
      setViewPort('desktop');
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension);
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return {
    viewPort,
    screenSize,
  };
};
