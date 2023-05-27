// import Season from "./seasons";
// import seasonalItems from "./seasonal_items";

class CountryMap{

    constructor(container, season) {
        this.season = season;
        this.container = container;
        this.container.addEventListener("mouseover", this.handleMousover.bind(this));
        this.container.addEventListener("click", this.handleClick.bind(this));
    };


    // works but need to fix its position to the path somehow

    handleMousover(e) {
        let stateName = document.getElementById('state-name');
        let stateEl = e.target.tagName;
        if (stateEl === 'path') {
            let content = `${e.target.dataset.id}`;
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

        // console.log(e, "event");
        // console.log(stateId, "state ID")
        // console.log(seasonEl[stateId], 'season filtered data');
        if (!seasonEl) {
            alert("Please select a season");
        } else {
            return seasonEl[stateId];
            // try {
            //     throw new Error("Please select a season");
            // } catch (error) {
            //     console.error(error);
            // }
        }
    // error throwing is not working right
    };
}

export default CountryMap;
