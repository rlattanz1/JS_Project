
class Music {

    constructor(song) {
        this.song = new Audio('../src/song/10-Shop.mp3');
        this.playing = false;
        this.toggle = document.getElementById('music-toggle')
        this.toggle.addEventListener("click", this.toggleMusic.bind(this));
    }

    toggleMusic() {
        if (this.playing === false) {
            this.song.play();
            this.playing = true;
        } else {
            this.song.pause();
            this.playing = false;
        };
    };
}

export default Music;
