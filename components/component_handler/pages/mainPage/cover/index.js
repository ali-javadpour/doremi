import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UserContext } from "@/context/provider";
import styles from "./mainPage_cover.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import BottomPlaylist from "./BottomPlaylist";

const MainPage_Cover = () => {
  const contextData = useContext(UserContext);

  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(61); // initial width
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDeg, setArrowDeg] = useState(0);

  useEffect(() => {
    console.log("is open", isOpen);
    if (isOpen) {
      setArrowDeg(180);
    } else {
      setArrowDeg(0);
    }
  }, [isOpen]);

  // custom style
  const style = {
    background: "white",
    width: `${width}%`,
    height: "98%",
    // cursor: 'col-resize',
    // transition: "width 1s ease-in-out",
    transition: "width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s",
    zIndex: "100",
    position: "absolute",
    right: "0px",
    margin: "10px",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "black",
  };

  // event handler for resizing
  let firstWidth;

  const openClickFunction = () => {
    if (width === 61) {
      setWidth(91.3);
      setIsOpen(true);
    } else {
      setWidth(61);
      setIsOpen(false);
    }
  };

  const handleResize = (event) => {
    const newWidth = event.pageX;
    if (!firstWidth) {
      firstWidth = newWidth;
    }
    if (firstWidth > newWidth) {
      setWidth(91.3);
      console.log("left");
      setIsOpen(true);
    } else if (firstWidth < newWidth) {
      setWidth(61);
      console.log("right");
      setIsOpen(false);
    } else {
      console.log("not");
    }
  };

  useEffect(() => {
    console.log(isDragging);
    if (isDragging) {
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", () => setIsDragging(false));
    } else {
      document.removeEventListener("mousemove", handleResize);
    }

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", () => setIsDragging(false));
    };
  }, [isDragging]);

  useEffect(() => {
    const handleResize = () => {
      const width = componentRef.current.getBoundingClientRect().width;
      setComponentWidth(width);
    };

    // Call the handleResize function when the component renders initially
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className={styles.mainDiv}>

    <div
      ref={componentRef}
      style={style}
      onMouseDown={() => setIsDragging(true)}
    >
      <div className="flex flex-row justify-between py-4 px-10 w-full mt-[10px] h-[10%] ">
        <div className="flex justify-center items-center gap-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer ease-in-out duration-1000"
            style={{ transform: `rotate(${arrowDeg}deg)` }}
            onClick={() => openClickFunction()}
          />
          <h1>Home</h1>
        </div>
        <div className={styles.cover_header_options}>
          <FontAwesomeIcon icon={faBell} />
          <div>
            <FontAwesomeIcon
              className=" opacity-40 mr-[-24px] "
              icon={faMagnifyingGlass}
            />
            <input
              placeholder="search"
              className=" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7  bg-white mr-6 "
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-[90%]">
        <div
          //   style={{width: componentWidth}}
          style={
            isOpen
              ? {
                  width: "65%",
                  transition:
                    "width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s",
                }
              : {
                  width: "100%",
                  transition:
                    "width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s",
                }
          }
          className="duration-1000 ease-in-out h-full"
        >
          <div className=" h-[30%] bg-blue-200 "></div>
          {/* {console.log(boxWidth)} */}
          {/* <Stage
                width={boxWidth * 0.5}
                height={height * 0.5}
                onWheel={handleWheel}
                scaleX={stage.stageScale}
                scaleY={stage.stageScale}
                x={stage.stageX}
                y={stage.stageY}
                draggable
            /> */}

          <div className=" w-full px-10 flex items-center justify-center gap-4 h-[70%] ">
            <div style={{ minWidth: componentWidth * 0.9 }} className="h-full">
              <div className=" w-full flex justify-between items-end h-[10%] border-b border-gray-300 ">
                <h3>Trending right now</h3>
                <p className=" cursor-pointer ">see all</p>
              </div>
              {/* <div className={styles.cover_bottomPlaylist_body}> */}
              <BottomPlaylist playList={contextData.playList} />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div
          style={
            isOpen
              ? {
                  opacity: 1,
                  width: "35%",
                  transition: "all 100ms ease-in-out",
                }
              : { opacity: 0, width: 0, transition: "all 1000ms ease-in-out " }
          }
          className="bg-green-300 w-0 h-full rounded-br-3xl flex justify-center items-center"
        ></div>
      </div>
    </div>
    // </div>
  );
};
export default MainPage_Cover;
