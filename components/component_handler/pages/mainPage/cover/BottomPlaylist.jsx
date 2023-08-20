import { useContext, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as empty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import styles from "./mainPage_cover.module.css";
import { UserContext } from "@/context/provider";

const BottomPlaylist = ({ playList }) => {
  const contextData = useContext(UserContext);

  const toggleLike = (e,index) =>{
    e.stopPropagation()
    contextData.playList[index].isLiked = !contextData.playList[index].isLiked
      console.log(contextData.playList[index].isLiked);
      contextData.setPlayList([... contextData.playList])
  }

  const memoizedPlaylist = useMemo(() => {
    return playList.map((item, index) => (
      <div className={styles.cover_bottomPlaylist_body} key={item.id}>
        <div className={styles.cover_bottomPlaylist_body_name}>
          <p>
            {String(index + 1).length === 1
              ? "0" + String(index + 1)
              : index + 1}
          </p>
          <img src={item.img.src} />
          <div>
            <h4> {item.title} </h4>
            <p> {item.artist} </p>
          </div>
        </div>
        <div className={styles.cover_bottomPlaylist_body_genre}>
          <p> {item.genre} </p>
          <p style={{ opacity: "0.5" }}> {item.id} </p>
        </div>
        <div className={styles.cover_bottomPlaylist_body_like}>
          {item.isLiked ? (
            <FontAwesomeIcon icon={heart} onClick={(e) => toggleLike(e,index)} className=" text-red-500 cursor-pointer hover:text-red-600 duration-200 ease-in-out " />
          ) : (
            <FontAwesomeIcon icon={empty} onClick={(e) => toggleLike(e,index)} className=" hover:text-red-500 cursor-pointer  duration-200 ease-in-out " />
          )}
          <span className="cursor-pointer" > ... </span>
        </div>
      </div>
    ));
  }, [playList]); // Recalculate only if contextData.playList changes

  return <div className=" overflow-auto h-[90%] " >{memoizedPlaylist}</div>;
};

export default BottomPlaylist;
