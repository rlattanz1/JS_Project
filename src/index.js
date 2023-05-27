import CountryMap from "./map";
import Season from "./seasons";
import Music from "./music";
import seasonalItems from "./seasonal_items";




document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const filter = document.getElementsByClassName("season-filter")[0];
    const song = document.getElementById("music-toggle");
    const itemsSeason = seasonalItems; // should this be defined here or just in my seasons class
    const music = new Music(song);
    const season = new Season(filter, itemsSeason);
    const map = new CountryMap(container, season);
});


