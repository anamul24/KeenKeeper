import { Children, createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const addEntry = (type, name) =>{
        const entry = {
            id: Date.now(), type,
            title: `${type} with ${name}`,
            date: new Date().toLocaleDateString()
        };
        setTimeline(prev => [entry, ...prev])
    };

    return(
        <TimelineContext.Provider value={{ timeline, addEntry }}>{children}</TimelineContext.Provider>
        );
};