
class Music {

    constructor(song) {
        this.song = song

        this.song.addEventListener("click", this.toggleMusic.bind(this))
    }

    toggleMusic(e) {

        e.preventDefault();

        console.log(e, "event")
        
    };


}

export default Music;
