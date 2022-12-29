import { useRef, useState, useEffect } from "react";

export default function Image({ src, lazySrc, classStyle }) {
  const imgRef = useRef(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.1
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);
  
  return (
    <img
      className={classStyle}
      ref={imgRef}
      src={`${isLoad ? src : lazySrc}`}
      alt="postImage"
    />
  );
}

let observer = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

function onIntersection(entries, io) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}
