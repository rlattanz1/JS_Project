

class Seasons {

    constructor(filter) {
        this.filter = filter

        this.filter.addEventListener("click", this.SeasonFilter.bind(this))
    }


    SeasonFilter(e) {

        e.preventDefault();
        console.log(e, "event")

        let filterId = e.target.id;
        console.log(filterId, "filterId")
        // if (content === 'Fall') {

        // } else {

        // }
    };

    //async filterData() {
        
    // }
};


    export default Seasons;
