import React, {useEffect} from 'react'

export default function Medium() {
    useEffect(() => {
        loadMediumData();
    }, []);

    const loadMediumData = () => {
        console.log("Hi")
        fetch(process.env.REACT_APP_MEDIUM_QUERY)
    } 
    return (
        <div>
            
        </div>
    )
}
