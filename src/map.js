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
        let stateEl = seasonEl[stateId];
        // console.log(seasonEl[stateId], 'season filtered data');
        if (!stateEl) {
            alert("Please select a season and a valid state");
        } else {
            let menu = document.getElementById("items-list");
            menu.innerText = '';
            const itemContainer = document.getElementById("items");

            const elements = Object.keys(stateEl);
            elements.forEach(key => {
                let listEl = document.createElement("li");
                let imgEl = document.createElement("img");
                imgEl.src = stateEl[key][0];
                imgEl.innerText = stateEl[key][1];
                listEl.append(`${imgEl}`)
                // listEl.append(`${product_desc}`);
                menu.append(listEl)
            })
            console.log(menu);
            if (itemContainer.style.display === 'flex') {
                itemContainer.style.display = 'none';
            } else {
                itemContainer.style.display = 'flex';
            };
            return itemContainer;
        }
    };

};

export default CountryMap;
