import Season from "./seasons";
// import seasonalItems from "./seasonal_items";

class CountryMap{

    constructor(container, season) {
        this.season = season;
        this.container = container;
        this.container.addEventListener("click", this.handleClick.bind(this))
    }

    handleClick(e) {
        e.preventDefault();

        let stateId = e.target.id;
        let seasonEl = this.season.filteredItems
        // console.log(e, "event");
        console.log(stateId, "state ID")
        console.log(seasonEl, 'season filtered data')
    //     if (this.season.filteredItems !== null) {
    //             return this.season[stateId];
    //     } else {
    //         throw new Error("Please Select A Season");
    //     }
    } //catch(Error);

}

export default CountryMap;
