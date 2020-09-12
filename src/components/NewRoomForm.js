import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            type='text'
                            placeholder="Room Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            type='text'
                            placeholder='Room Area'
                            onChange={handleAreaInput}
                            value={area}
                        />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary form-control">Add Room</button>
            </form>
        </div>
    )
};