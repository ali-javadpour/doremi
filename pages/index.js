import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LeftSideBar from '@/components/leftSideBar'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/provider'
import ComponentHandler from '@/components/component_handler'
import MainPage_Cover from '@/components/component_handler/pages/mainPage/cover'
import { addDurationToPlaylist } from '../components/mostly_used/dataCleaner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const contextData = useContext(UserContext);
  useEffect(()=>{
    console.log(contextData.showingPage);
  },[contextData])

  // useEffect(()=>{
  //   const newPlaylist = addDurationToPlaylist(contextData.playList)
  //   console.log("play list: ",newPlaylist);
  //   contextData.setPlayList([newPlaylist])
  // },[])

  return (
    <>
      <div className={styles.main} >
        <LeftSideBar />
        <ComponentHandler />
        {/* <MainPage_Cover /> */}
      </div>
    </>
  )
}
