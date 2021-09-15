import React, { useState, useEffect } from 'react'
import Location from './Location'
import './styles/main.css'

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [places, setPlaces] = useState(url)

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [destination, setDestination] = useState([])
    const removePlace = () => {
        setPlaces(places.filter((place) => places.id !== id))
    }
    const getTourSports = async () => {
        const response = await fetch(url);
        const spots = await response.json();
        setDestination(spots);
    }
    useEffect(() => {
        getTourSports()
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
                        <Location data={spots} remove={removePlace} />
                    </>
                )
            })
            }
        </div>
    )
}

export default App
