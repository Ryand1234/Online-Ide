import { useState, useEffect } from 'react';
import $ from 'jquery'

function getWindowDimensions() {
  const width = $(window).width()
  var size;
  if(width < 750)
    size = 25;
  else
    size = 15
  return {
    width,
    size
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
