import React from 'react';
import { housesApi } from '../rest/HousesApi';

export class HouseForm extends React.Component {
    state = {
        name: ''
    };

    createHouse = async (house) => {
        await housesApi.post(house);
        this.setState({name: ''});
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        this.createHouse(this.state.name);
        
    };

    render() {
        return (
            <div className="card bg-light">
                <div className="card-body">
                    <h2>Create a New House:</h2>
                    <form onSubmit={this.onSubmit}>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="New House Name" 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})} 
                        />
                        <button type="submit" className="btn btn-primary form-control">Add</button>
                    </form>
                    
                </div>
            </div>
        );
    }
}