
class Map {

    constructor(container) {
        this.container = container
        console.log(this.container, 'this.container')

        this.container.addEventListener("click", this.handleClick.bind(this))
    }


    handleClick(e) {
        e.preventDefault();

        console.log(this.container, 'handleClick')
    }

    // selectData() {

    // }
}

export default Map;
