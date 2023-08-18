import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/provider'
import styles from './mainPage.module.css'
import MainPage_Under from './under';
import MainPage_Cover from './cover';

const MainPage = () =>{
    const contextData = useContext(UserContext);
    return(
        <>
            <MainPage_Under />
            <MainPage_Cover />
        </>

    )
}
export default MainPage