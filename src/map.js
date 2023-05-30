// import Season from "./seasons";
// import seasonalItems from "./seasonal_items";

class CountryMap{

    constructor(container, season) {
        this.season = season;
        this.container = container;
        this.container.addEventListener("mouseover", this.handleMousover.bind(this));
        this.container.addEventListener("click", this.handleClick.bind(this));
    };

    handleMousover(e) {
        let stateName = document.getElementById('state-name');
        let stateEl = e.target.tagName;
        if (stateEl === 'path') {
            let content = `${e.target.dataset.name}`;
            stateName.innerText = content;
        } else {
            let content = '';
            stateName.innerText = content;
        }
    }

    handleClick(e) {
        e.preventDefault();

        let stateId = e.target.id;
        let seasonEl = this.season.filteredItems;
        console.log(seasonEl[stateId], 'season filtered data');
        if (!seasonEl[stateId]) {
            alert("Please select a season and a valid state");
         } else {
            return seasonEl[stateId];
        }
    };
};

export default CountryMap;
