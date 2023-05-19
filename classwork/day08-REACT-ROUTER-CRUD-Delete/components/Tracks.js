import React from 'react'

export default function Tracks( {  tracks } ) {

    const deleteTrackFunc = async (id) => {
        try{
            const deleteTrack = await fetch(`http://localhost:8080/tracks/${id}`,{
                method: "delete"
            })

            console.log("DELETED? YES! ", deleteTrack)
        }catch(err){
            console.error(err.message)
        }
    }


    console.log("TRACKS tracks:::::", tracks)
    return (
        <>           
            {tracks.map( oneEle => {
                      return (
                    <tbody key = {oneEle.track_id}>
                        <tr>
                            <th scope="row">{oneEle.track_id}</th>
                            <td>{oneEle.track}</td>
                            <td>✏️</td>
                            <td><span onClick = {() =>{
                                deleteTrackFunc(oneEle.track_id)
                            }}>❌</span></td>
                            
                        </tr>
                    </tbody>
                    )
                    })}
   
        </>
    )
}
