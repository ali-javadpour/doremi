import styles from './playButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const PlayButton = ({state}) => {
    if(state){
        return (
            <>
                <div className={styles.playButtonContainer}>
                    { state === "play" ? <FontAwesomeIcon icon={faPause} /> : state === "pause" && <FontAwesomeIcon icon={faPlay} />}
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className={styles.playButtonContainer}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </>
        )
    }
}
export default PlayButton