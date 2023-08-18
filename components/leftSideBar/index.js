import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faFolder, faUser, faHeart, faStar, faFolderClosed } from '@fortawesome/free-solid-svg-icons'

// function abc () {

// } 

const LeftSideBar = () => {
    return (
        <>
            <div className={styles.left_bar} >
                <span>logo</span>
                <div className={styles.left_bar_innerIcons}>
                    <FontAwesomeIcon icon={faHouse} />
                    <FontAwesomeIcon icon={faMusic} />
                    <FontAwesomeIcon icon={faFolder} />
                    <FontAwesomeIcon icon={faUser} />
                    <hr className={styles.divider} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faFolderClosed} />
                </div>
                <span>settings</span>
            </div>
        </>
    )
}
export default LeftSideBar