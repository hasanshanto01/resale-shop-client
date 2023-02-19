import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const MyBuyers = () => {

    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <h2>My Buyer</h2>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
        </div>
    );
};

export default MyBuyers;