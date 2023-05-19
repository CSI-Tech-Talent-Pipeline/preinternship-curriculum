import React, { useEffect, useState } from 'react'
//1. import useEffect, useState  

export default function ListTracks() {

    //7 use the useState to store the data we fetched from the server
    const [tracks, setTracks] = useState([])

    //3. let's define the function `getTracks`
    const getTracks = async () => {
        try{
        //4. fetch and assign the response 
        const response = await fetch("http://localhost:8080/tracks/")

        //5. parse the response into a json data structure
        const jsonData = await response.json()

        //6 console.log 
        //console.log(jsonData)

        //7 store that jsonData into the state, using useState
        setTracks(jsonData)

        }catch(err){
            console.error(err.message)
        }
    }

    //2. useEffect    
    useEffect(() => {
        getTracks();
    }, [])
    // 8. add the empty array to stop the useEffect making request continuously 

    //console.log(tracks)

    return (
        <>
          <table className="table m-5 text-center">

            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Track</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>

            <tbody>
                {tracks.map(eachTrack => {
                    return (
                        <tr key={eachTrack.track_id}>
                            <th scope="row">{eachTrack.track_id}</th>
                            <td>{eachTrack.track}</td>
                            <td>✏️</td>
                            <td>❌</td>
                        </tr>
                    )
                })}
            </tbody>
           </table>
        </>
    )
}
