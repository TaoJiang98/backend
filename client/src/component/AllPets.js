import React, {Component} from 'react'

class AllPets extends Component {
    constructor() {
        super();
        this.state = {
            allpets : []
        }
        this.getAllPets = this.getAllPets.bind(this);
    }

    getAllPets() {
        const url = "/allpets";
        let jsonTarget= [];
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                res.forEach(function(pet) {
                    jsonTarget.push({species: pet.species, sex: pet.sex, price: pet.price, name: pet.name, detail: pet.detail, contact: pet.contact_phone, breed: pet.breed, age: pet.age});
                });
                this.setState({allpets: jsonTarget});
                console.log(this.state.allpets);
            })
    }

    render() {
        return (
            <div>
                Here are all the pets
                <div>
                    <button onClick={this.getAllPets}>check</button>
                </div>
            </div>
        )
    }
}

export default AllPets;