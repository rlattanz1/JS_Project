
class Music {

    constructor(song) {
        this.song = song

        this.song.addEventListener("click", this.toggleMusic.bind(this))
    }

    toggleMusic(e) {

        e.preventDefault();
        let musicId = e.target.id
        console.log(musicId, "music ID")

    };


}

export default Music;
