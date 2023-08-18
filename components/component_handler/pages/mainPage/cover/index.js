import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/provider'
import styles from './mainPage_cover.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell, faHeart } from '@fortawesome/free-regular-svg-icons'

const MainPage_Cover = () => {
    const contextData = useContext(UserContext);

    const [isDragging, setIsDragging] = useState(false);
    const [width, setWidth] = useState(61); // initial width

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


    const BottomPlaylist = () => {
        return (
            contextData.playList.map((item, index) => {
                return (
                    <div className={styles.cover_bottomPlaylist_body} >
                        <div className={styles.cover_bottomPlaylist_body_name}>
                            <p>{String(index + 1).length === 1 ? ("0" + String(index + 1)) : index + 1}</p>
                            <img src={item.img.src} />
                            <div>
                                <h4> {item.title} </h4>
                                <p> {item.artist} </p>
                            </div>
                        </div>
                        <div className={styles.cover_bottomPlaylist_body_genre} >
                            <p> {item.genre} </p>
                            <p style={{ opacity: "0.5" }}> {item.id} </p>

                        </div>
                        <div className={styles.cover_bottomPlaylist_body_like} >
                            <FontAwesomeIcon icon={faHeart} />
                            <span> ... </span>

                        </div>
                    </div>
                )
            })
        )
    }

    return (
        // <div className={styles.mainDiv}>
        <div style={style} onMouseDown={() => setIsDragging(true)}>
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
            <div className={styles.cover_slider} >

            </div>
            <div className={styles.cover_bottomPlaylist}>
                <div className={styles.cover_bottomPlaylist_header}>
                    <h3>Trending right now</h3>
                    <p>see all</p>
                </div>
                {/* <div className={styles.cover_bottomPlaylist_body}> */}
                <BottomPlaylist />
                {/* </div> */}
            </div>
        </div>
        // </div>

    )
}
export default MainPage_Cover