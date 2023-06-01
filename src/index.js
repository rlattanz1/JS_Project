import CountryMap from "./map";
import Season from "./seasons";
import Music from "./music";
import seasonalItems from "./seasonal_items";




document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const filter = document.getElementsByClassName("season-filter")[0];
    const itemsSeason = seasonalItems;
    const music = new Music();
    const season = new Season(filter, itemsSeason);
    const map = new CountryMap(container, season);
});
