// import Season from "./seasons";
// import seasonalItems from "./seasonal_items";

class CountryMap{

    constructor(container, season) {
        this.season = season;
        this.container = container;
        this.container.addEventListener("click", this.handleClick.bind(this))
    };

    handleClick(e) {
        e.preventDefault();

        let stateId = e.target.id;
        let seasonEl = this.season.filteredItems;

        // console.log(e, "event");
        // console.log(stateId, "state ID")
        console.log(seasonEl[stateId], 'season filtered data')
    //     if (seasonEl) {
    //         return seasonEl[stateId];
    //     } else {
    //         try {
    //             throw new Error("Please select a season");
    //         } catch {
    //             return console.log(Error);
    //         }
    //     }
    // error throwing is not working right

    };

}

export default CountryMap;
