import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse, deleteHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul className="list-group">
            {house.rooms.map((room, index) => (
                <li key={index} className="list-group-item">
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button className="btn btn-danger delete" onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="card">
            <div className="card-header bg-light">
                <button className="btn btn-danger delete" onClick={(e) => deleteHouse(house)}>Delete House</button>
                <h2>{house.name}</h2>  
            </div>
            <div className="card-body">
                {
                    rooms({ rooms, houseId: house._id, deleteRoom})
                }
            </div>
            <div className="card-footer">
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        </div>
    );
};