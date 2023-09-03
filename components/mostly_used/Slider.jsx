import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Slider = ({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [state, setState] = useState(0);

  const prev = () => {
    setState((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setState((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(()=>{
      if(!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
  })

  return (
    <div className="overflow-hidden relative h-[90%] w-11/12 rounded-[20px] ">
      <div
        className="flex flex-col h-full transition-transform ease-in-out duration-500 "
        style={{ transform: `translateY(-${state * 100}%)` }}
      >
        {slides}
      </div>
      {/* <div className="absolute indent-0 flex items-center justify-between p-4 w-full h-full top-0 ">
          <button onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} className="bg-white/80 p-1 rounded-full shadow text-gray-800 hover:bg-white" />
          </button>
          <button onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} className="bg-white/80 p-1 rounded-full shadow text-gray-800 hover:bg-white" />
          </button>
        </div> */}
      <div className="absolute flex bottom-0 top-0 right-4">
        <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 bg-opacity-50">
          {slides.map((item, index) => (
            <div
              onClick={() => setState(index)}
              className={`transition-all w-1 bg-white rounded-full ${
                state === index ? "h-4" : "h-1 bg-opacity-70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
