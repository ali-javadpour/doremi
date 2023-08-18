import React, { createContext, useState } from 'react';
import image1 from "../public/img/aseman_abri.jpg"
import image2 from "../public/img/Diyare-Asheghihayam.jpg"


export const UserContext = createContext();

const Provider = ({ children }, props) => {

	const smallBoxData = [
		{
			img: image1,
			title: "aseman abrist",
			artist: "Homayoon shajarian",
			genre: ""
		},
		{
			img: image2,
			title: "diare asheghi hayam",
			artist: "Homayoon shajarian",
			genre: ""
		},
		{
			img: image2,
			title: "aseman abrist",
			artist: "Homayoon shajarian",
			genre: ""
		},
	]
	// const mainURL = "https://api.mobolet.ir/"
	const [showingPage, setShowingPage] = useState("main")
	//brand_menu Data
	const [playingMusic, setPlayingMusic] = useState({
		img: image1,
		url: "",
		title: "aseman abrist",
		artist: "Homayoon shajarian",
		genre: ""
	})
	const [playList, setPlayList] = useState([
		{
			id: "0001",
			img: image1,
			url: "https://media-vip.my-pishvaz.com/musicfa/tagdl/downloads/Homayoun%20Shajaryan%20-%20Ahay%20Khabardar%20(320).mp3?st=K3nR8_23knD0-0kncyUY5Q&e=1679516219",
			title: "ahay khabar dar",
			artist: "Homayoon shajarian",
			genre: "pop"
		},
		{
			id: "0002",
			img: image2,
			url: "https://media-vip.my-pishvaz.com/musicfa/tagdl/ati/Homayoun%20Shajaryan%20-%20Diare%20Asheghihayam%20(320).mp3?st=yZlF1qZQASEImMZZbEQIFw&e=1679516219",
			title: "دیار عاشقی هایم",
			artist: "Homayoon shajarian",
			genre: "jazz"
		},
		{
			id: "0003",
			img: image1,
			url: "https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269",
			title: "khoon az rokham beshavi",
			artist: "Homayoon shajarian",
			genre: "rock"
		},
	])
	const [music, setMusic] = useState(null)
	const [playingTrack, setPlayingTrack] = useState(0)

	return (
		<UserContext.Provider
			value={{
				showingPage, setShowingPage,
				smallBoxData,
				playingMusic, setPlayingMusic,
				music, setMusic,
				playingTrack, setPlayingTrack,
				playList, setPlayList,

			}}
		>
			{children}
		</UserContext.Provider>
	);
};
export default Provider;
