import CountryMap from "./map";
import Seasons from "./seasons";
// import Music from "./music";
// import seasonalItems from "./seasonal_items";




document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const filter = document.getElementsByClassName("season-filter")[0];
    // const song = document.getElementById("music-toggle")
    // const items = seasonalItems[filter[stateId]]
    // const music = new Music(song)
    const season = new Seasons(filter);
    const map = new CountryMap(container);

});
