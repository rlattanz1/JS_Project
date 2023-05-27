import seasonalItems from "./seasonal_items";

class Season {

    constructor(filter, _itemsSeason) {
        this.filter = filter;
        this.itemsSeason = seasonalItems;
        this.filteredItems = this.itemsSeason
        this.filter.addEventListener("click", this.seasonFilter.bind(this));
    };


    seasonFilter(e) {
        e.preventDefault();

        let seasonId = e.target.id;
        const seasonFilter = this.itemsSeason[seasonId];
        this.filteredItems = seasonFilter;
        return this.filteredItems;
    };
};


    export default Season;
