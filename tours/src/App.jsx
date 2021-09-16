import React, { useState, useEffect } from 'react'
import Location from './Location'
import './styles/main.css'

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [destination, setDestination] = useState([])
    const removePlace = (id) => {
        // const {id} =places
        const newPlaces = destination.filter((places) => places.id !== id)

        setDestination(newPlaces)
    }
    const getTourSpots = async () => {
        const response = await fetch(url);
        const spots = await response.json();
        setDestination(spots);
    }
    useEffect(() => {
        getTourSpots()
                .then(setIsLoading(false))
            .catch((error) => console.log(error))
    },[])
    if (isError) {
        return (
            <div>
                ERROR...(ERROR GIF, ERROR PAGE)                
            </div>
        )
    }
    if (isLoading) {
        return (
            <div>
                LOADING...(LOADING GIF, LOADING PAGE)
            </div>
        )
    }
    console.log(destination);
    return (
        <div>
            <h1 className='heading'>Our Tours</h1>
            {destination.map((spots) => {
                // console.log(spots)
                return(
                    <>
                        <Location data={spots} remove={removePlace}/>
                    </>
                )
            })
            }
            {/* <button className='heading' onClick={() => {setDestination(destination)}}>Reset Tours List</button> */}
        </div>
    )
}

export default App
