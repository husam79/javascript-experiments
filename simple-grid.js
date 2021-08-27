export class SimpleGrid{
    constructor(type, destElement) {
        this.type = type;
        this.destElement = destElement;
        this.dataset = [];
    }

    setDataset(dataset){
        //check records in "dataset" to be same as this.type prototype.
        let typeKeys = Object.keys(this.type);
        for(let e of dataset){
            let eKeys = Object.keys(e);

            if(typeKeys.length == eKeys.length){
                for(let i of typeKeys){
                    if(!(i in e)){
                        throw new Error("There is at least one record in the dataset has a prototype that differs from the passed type.");
                    }
                }
            }
            else{
                throw new Error("There is at least one record in the dataset has a prototype that differs from the passed type.");
            }
        }
        this.dataset = dataset;
        this.render();
    }

    render(){
        let result = "<ul>";

        for(let e of this.dataset){
            result = result + `<li>`;
            for(let p of Object.keys(this.type)) {
                result = result + e[p] + " - ";
            }
            result = result.substr(0,result.length-2) + `</li>`;
        }
        result = result + "</ul>";

        this.destElement.innerHTML = result;

    }

}