import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi';
import { getNodeText } from '@testing-library/react';

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses()
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    deleteHouse = async (house) => {
        await housesApi.delete(house);
        this.fetchHouses();
    }

    render() {
        return (
            <div>
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        deleteHouse={this.deleteHouse}
                        />
                ))}
            </div>
        )
    }
}