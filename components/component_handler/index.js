import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/provider'
import styles from './componentHandler.module.css'
import MainPage from './pages/mainPage';

const ComponentHandler = () =>{
    const contextData = useContext(UserContext);
    return(
        <div className={styles.main_division} >
            {contextData.showingPage === "main" ? 
            <MainPage /> : "by"}
        </div>

    )
}
export default ComponentHandler