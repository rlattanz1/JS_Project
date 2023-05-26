
class CountryMap {

    constructor(container) {
        this.container = container
        console.log(this.container, 'this.container')

        this.container.addEventListener("click", this.handleClick.bind(this))
    }


    handleClick(e) {
        e.preventDefault();

        let stateId = e.target.id;
        // if (stateId === ) {

        // } else {

        // }

    }

    // selectData() {

    // }
}

export default CountryMap;
