
class Map {

    constructor(container) {
        this.container = container

        this.container.addEventListener("click", this.handleClick.bind(this))
    }


    handleClick(e) {
        // let ele = e.target.getElementByClassName("state")
    }

    selectData() {
        
    }
}

export default Map;
