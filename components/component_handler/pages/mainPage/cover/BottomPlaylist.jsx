import { useContext, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faHeart as empty,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import styles from "./mainPage_cover.module.css";
import { UserContext } from "@/context/provider";

const BottomPlaylist = ({ playList }) => {
  const contextData = useContext(UserContext);

  const toggleLike = (e, index) => {
    e.stopPropagation();
    contextData.playList[index].isLiked = !contextData.playList[index].isLiked;
    console.log(contextData.playList[index].isLiked);
    contextData.setPlayList([...contextData.playList]);
  };

  const memoizedPlaylist = useMemo(() => {
    return playList.map((item, index) => (
      <div
        className="flex mt-5 items-center w-full group duration-1000 ease-in-out "
        key={item.id}
      >
        <div className="flex items-center w-4/6 z-10 duration-1000 ease-in-out ">
          <FontAwesomeIcon
            icon={faCirclePlay}
            // onClick={(e) => toggleLike(e, index)}
            className=" cursor-pointer text-2xl z-0   "
          />
          <div className="w-8 -ml-6 pl-2 z-10 duration-700 ease-in-out group-hover:ml-2 bg-white mr-1" >
            <p className="font-bold opacity-30">
              {String(index + 1).length === 1
                ? "0" + String(index + 1)
                : index + 1}
            </p>
          </div>
          <img
            className="w-[50px] h-[50px] mr-5 rounded-[10px] "
            src={item.img.src}
          />
          <div>
            <h4> {item.title} </h4>
            <p className="text-[10px] mt-1 opacity-50 "> {item.artist} </p>
          </div>
        </div>
        <div className={styles.cover_bottomPlaylist_body_genre}>
          <p> {item.genre} </p>
          <p style={{ opacity: "0.5" }}> {item.id} </p>
        </div>
        <div className={styles.cover_bottomPlaylist_body_like}>
          {item.isLiked ? (
            <FontAwesomeIcon
              icon={heart}
              onClick={(e) => toggleLike(e, index)}
              className=" text-red-500 cursor-pointer hover:text-red-600 duration-200 ease-in-out "
            />
          ) : (
            <FontAwesomeIcon
              icon={empty}
              onClick={(e) => toggleLike(e, index)}
              className=" hover:text-red-500 cursor-pointer  duration-200 ease-in-out "
            />
          )}
          <span className="cursor-pointer"> ... </span>
        </div>
      </div>
    ));
  }, [playList]); // Recalculate only if contextData.playList changes

  return <div className=" overflow-auto h-[90%] ">{memoizedPlaylist}</div>;
};

export default BottomPlaylist;
