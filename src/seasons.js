

class Seasons {

    constructor(filter) {
        this.filter = filter

        this.filter.addEventListener("click", this.SeasonFilter.bind(this))
    }
}

    SeasonFilter() {
        // let content = e.target.innerText;
        // if (content === 'Fall') {

        // } else {

        // }
    };

    export default Seasons;
