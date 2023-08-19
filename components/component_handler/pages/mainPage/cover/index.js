import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { UserContext } from '@/context/provider'
import styles from './mainPage_cover.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell, faHeart } from '@fortawesome/free-regular-svg-icons'
import BottomPlaylist from './BottomPlaylist';

const MainPage_Cover = () => {
    const contextData = useContext(UserContext);

    const [isDragging, setIsDragging] = useState(false);
    const [width, setWidth] = useState(61); // initial width
    const [componentWidth, setComponentWidth] = useState(0);
    const componentRef = useRef(null);

    // custom style
    const style = {
        background: 'white',
        width: `${width}%`,
        height: '98%',
        // cursor: 'col-resize',
        // transition: "width 1s ease-in-out",
        transition: "width 1s cubic-bezier(0.38, -0.2, 0.61, 1.21) 0s",
        zIndex: "100",
        position: "absolute",
        right: "0px",
        margin: "10px",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
    };

    // event handler for resizing
    let firstWidth
    const handleResize = (event) => {
        const newWidth = event.pageX;
        if (!firstWidth) {
            firstWidth = newWidth
        }
        if (firstWidth > newWidth) {
            setWidth(91.3);
            console.log("left");
        } else if (firstWidth < newWidth) {
            setWidth(61);
            console.log("right");
        } else {
            console.log("not");
        }
    };


    useEffect(() => {
        console.log(isDragging);
        if (isDragging) {
            document.addEventListener('mousemove', handleResize);
            document.addEventListener('mouseup', () => setIsDragging(false));
        } else {
            document.removeEventListener('mousemove', handleResize);
        }

        return () => {
            document.removeEventListener('mousemove', handleResize);
            document.removeEventListener('mouseup', () => setIsDragging(false));
        };
    }, [isDragging]);


    // const BottomPlaylist = useMemo(() => {
    //     return (
    //         contextData.playList.map((item, index) => {
    //             return (
    //                 <div className={styles.cover_bottomPlaylist_body} >
    //                     <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>
    //                         <p>{String(index + 1).length === 1 ? ("0" + String(index + 1)) : index + 1}</p>
    //                         <img src={item.img.src}  />
    //                         <div>
    //                             <h4> {item.title} </h4>
    //                             <p> {item.artist} </p>
    //                         </div>
    //                     </div>
    //                     <div className={styles.cover_bottomPlaylist_body_genre} >
    //                         <p> {item.genre} </p>
    //                         <p style={{ opacity: "0.5" }}> {item.id} </p>

    //                     </div>
    //                     <div className={styles.cover_bottomPlaylist_body_like} >
    //                         <FontAwesomeIcon icon={faHeart} />
    //                         <span> ... </span>

    //                     </div>
    //                 </div>
    //             )
    //         })
    //     )
    // },[contextData.playList])

    // const BottomPlaylist = () => {
    //     const memoizedPlaylist = useMemo(() => {
    //         return contextData.playList.map((item, index) => (
    //             <div className={styles.cover_bottomPlaylist_body} key={item.id}>
    //                 <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>
    //                         <p>{String(index + 1).length === 1 ? ("0" + String(index + 1)) : index + 1}</p>
    //                         <img src={item.img.src}  />
    //                         <div>
    //                             <h4> {item.title} </h4>
    //                             <p> {item.artist} </p>
    //                         </div>
    //                     </div>
    //                     <div className={styles.cover_bottomPlaylist_body_genre} >
    //                         <p> {item.genre} </p>
    //                         <p style={{ opacity: "0.5" }}> {item.id} </p>

    //                     </div>
    //                     <div className={styles.cover_bottomPlaylist_body_like} >
    //                         <FontAwesomeIcon icon={faHeart} />
    //                         <span> ... </span>

    //                     </div>
    //             </div>
    //         ));
    //     }, [contextData.playList]); // Recalculate only if contextData.playList changes
    
    //     return (
    //         <div>
    //             {memoizedPlaylist}
    //         </div>
    //     );
    // }
    // const [boxWidth, setBoxWidth] = useState(null)
    useEffect(() => {
        const handleResize = () => {
            const width = componentRef.current.getBoundingClientRect().width;
            setComponentWidth(width);
          };
      
          // Call the handleResize function when the component renders initially
          handleResize();
        window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    },[]);

    return (
        // <div className={styles.mainDiv}>
        
        <div ref={componentRef} style={style} onMouseDown={() => setIsDragging(true)}>
            <div className={styles.cover_header}>
                <h1>Home</h1>
                <div className={styles.cover_header_options}>
                    <FontAwesomeIcon icon={faBell} />
                    <div>
                        <FontAwesomeIcon className={styles.serachIcon} icon={faMagnifyingGlass} />
                        <input placeholder="search" />
                    </div>
                </div>
            </div>
            <div className=" w-[90%] h-[230px] min-h-[200px] bg-blue-200 " >

            </div>
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
            <div className=" w-full px-10 overflow-y-auto " >
            <div style={{width: componentWidth*0.9}} >
                <div className={styles.cover_bottomPlaylist_header}>
                    <h3>Trending right now</h3>
                    <p className=" cursor-pointer " >see all</p>
                </div>
                {/* <div className={styles.cover_bottomPlaylist_body}> */}
                <BottomPlaylist playList={contextData.playList} />
                {/* </div> */}
            </div>
        </div>
        </div>
        // </div>

    )
}
export default MainPage_Cover