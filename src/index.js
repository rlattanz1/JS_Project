import Map from "./map";
// import Seasons from "./seasons";
// import Music from "./music";



document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    // const filter = document.getElementsByClassName("season-filter");
    // const song = document.getElementById("music-toggle")
    // const music = new Music(song)
    // const season = new Seasons(filter);
    const map = new Map(container);

});
