
export const addDurationToPlaylist = (playList) => {
    for (let i in playList) {
        const audio = new Audio(playList[i].url)
        audio.onloadedmetadata = function () {
            const duration = audio.duration;
            playList[i].duration = duration
        };
    }
    return playList
}