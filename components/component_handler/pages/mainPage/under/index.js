import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '@/context/provider'
import styles from './mainPage_under.module.css'
import PlayButton from '@/components/mostly_used/play_button';
import { faRepeat, faForwardStep, faBackwardStep, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainPage_Under = () => {
    const contextData = useContext(UserContext);

    const audioRef = useRef(null);
    const [timelineValue, setTimelineValue] = useState(0);
    
    const [isPlaying, setIsPlaying] = useState(false)
    const [remainingTime, setRemainingTime] = useState(["0:00", "0:00"])

    const trackNumber = contextData.playingTrack
    const track = contextData.playList[trackNumber]
    useEffect(() => {
        contextData.setMusic(new Audio(track.url))
        console.log("playing track : ",contextData.playingTrack);
    }, [contextData.playingTrack])

    // useEffect(() => {
    //     if (audioRef.current) {
    //         audioRef.current.addEventListener("timeupdate", function () {
    //             console.log("Audio is playing");
    //         });
    //     }
    // }, []);
    useEffect(() => {
        // const music = audioRef.current;
        if (contextData.music) {
            const updateTimeline = () => {
                const currentTime = contextData.music.currentTime;
                const duration = contextData.music.duration;
                setTimelineValue((currentTime / duration) * 100);
                setRemainingTime([`${Math.round(currentTime / 60)}:${String(Math.round(currentTime % 60)).length === 1 ? "0" + Math.round(currentTime % 60) : Math.round(currentTime % 60)}`,
                `${Math.round((duration - currentTime) / 60)}:${String(Math.round((duration - currentTime) % 60)).length === 1 ? "0" + Math.round((duration - currentTime) % 60) : Math.round((duration - currentTime) % 60)}`])
                if((duration - currentTime) === 0){
                    console.log("finished");
                    changeTrack("forward")
                }
            };
            // setIsPlaying(true)
            contextData.music.play()

            contextData.music.addEventListener("timeupdate", updateTimeline);

            return () => {
                contextData.music.removeEventListener("timeupdate", updateTimeline);
            };
        }
    }, [contextData.music]);

    const handleTimelineChange = (e) => {
        // const music = audioRef.current;
        const value = e.target.value;
        contextData.music.currentTime = (contextData.music.duration * value) / 100;
        setTimelineValue(value);
    };

    const playButton = () => {
        if (isPlaying) {
            setIsPlaying(false)
            contextData.music.pause()
        } else {
            setIsPlaying(true)
            contextData.music.play()
        }
        console.log("plying");
        console.log(contextData.music);
    }

    const SmallMusicBox = () => {
        return contextData.smallBoxData.map((item) => {
            return (
                <>
                    <div className={styles.mainSmallBox} style={{ backgroundImage: `url(${item.img.src})` }} >
                        <div className={styles.mainSmallBoxDetailPart}  >
                            <div className={styles.mainSmallBoxDetail} >
                                <p>{item.title}</p>
                            </div>
                            <div className={styles.mainSmallBoxPlay}>
                                <PlayButton />
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }

    const changeTrack = (e) =>{
        if(e === "backward"){
            if((contextData.playingTrack !== 0) && (contextData.music.currentTime < 5)){
                contextData.music.pause()
                setIsPlaying(false)
                contextData.setPlayingTrack(contextData.playingTrack - 1)
                contextData.music.currentTime = 0
                // contextData.music.play()
            }else{
                contextData.music.currentTime = 0
            }
        }else if(e === "forward"){
            console.log("hey yoooooou",contextData.playingTrack , Number(contextData.playList.length))
            if((contextData.playingTrack + 1 )< Number(contextData.playList.length)){
                setIsPlaying(false)
                contextData.music.pause()
                contextData.setPlayingTrack(contextData.playingTrack + 1)
                contextData.music.currentTime = 0
                // contextData.music.play()
            }else{
                setIsPlaying(false)
                contextData.music.pause()
                contextData.setPlayingTrack(0)
                contextData.music.currentTime = 0
            }
        }
        setIsPlaying(true)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.smallMusicCountainer}>
                <h3>Next Composition</h3>
                <div className={styles.allSmallBox} >
                    <SmallMusicBox />
                </div>
            </div>
            <div className={styles.musicPlayerMainCountainer}>
                <div className={styles.musicPlayerMain}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={track.img.src} />
                    </div>
                    <h2 style={{ marginTop: "10px", textAlign: "center" }} >{track.title}</h2>
                    <p style={{ opacity: "0.8", marginBottom: "25px" }} >{track.artist}</p>
                    <div className={styles.musicPlayerButtons}>
                        <FontAwesomeIcon icon={faRepeat} />
                        <div className={styles.musicPlayerMainButtons}>
                            <FontAwesomeIcon style={{cursor: "pointer"}} onClick={() => changeTrack("backward")} icon={faBackwardStep} />
                            <div style={{ width: "50px", height: "50px" }} onClick={playButton} > <PlayButton state={isPlaying?"play":"pause"} /> </div>
                            <FontAwesomeIcon style={{cursor: "pointer"}} onClick={() => changeTrack("forward")} icon={faForwardStep} />
                        </div>
                        <FontAwesomeIcon icon={faShuffle} />
                    </div>
                    <div className={styles.musicTimeline}>
                        <p className={styles.musicTimlineNumber} >{remainingTime[0]}</p>
                        <input className={styles.musicRange} type="range" min="0"
                            max="100"
                            step="0.01"
                            value={timelineValue}
                            onChange={handleTimelineChange} />
                        {/* <div className="music-player-container">
                            <music ref={audioRef} src="https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3"></music>
                        </div> */}
                        <p className={styles.musicTimlineNumber} >{remainingTime[1]}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MainPage_Under