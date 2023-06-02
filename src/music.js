
class Music {

    constructor() {
        this.song = new Audio('..//src/song/10-Shop.mp3'); //the path for my mp3 in my song folder
        this.playing = false;
        this.song.loop=true;
        this.toggle = document.getElementById('music-toggle') //my music toggle button
        this.toggle.addEventListener("click", this.toggleMusic.bind(this)); //event listener added to my music toggle button
    }

    toggleMusic() {
        if (this.playing === false) {
            this.song.play();   //my play or pause music
            this.playing = true;
        } else {
            this.song.pause();
            this.playing = false;
        };
    };
}

export default Music;
