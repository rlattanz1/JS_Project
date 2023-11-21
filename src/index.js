import CountryMap from "./map";
import Season from "./seasons";
import Music from "./music";
import seasonalItems from "./seasonal_items";
import Instructions from "./instructions";




document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const filter = document.getElementsByClassName("season-filter")[0];
    const modal = document.getElementById("instructions-modal");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const prodBtn = document.getElementById("prod-button");
    const itemsSeason = seasonalItems;
    const music = new Music();
    const season = new Season(filter, itemsSeason);
    const map = new CountryMap(container, season, prodBtn);
    const instructions = new Instructions(modal, openBtn, closeBtn);
});
