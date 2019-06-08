import Event from "./Event";
import React, {useEffect, useRef, useState} from 'react'

const eventsRolling = ["blue", "green", "yellow","black"].sort(() => Math.random() - 0.5);

export function FlippingEvent() {
    const [eventId, setEventId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setEventId((eventId + 1) % 4)
        }, 400);
        return () => clearInterval(interval)
    }, [eventId]);


    return <div>
        {
            <Event color={eventsRolling[eventId]}/>
        }
    </div>
}