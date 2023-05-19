import React from 'react'

export default function DeleteTrack( {track_id}) {

    //console.log(track_id)

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

    return (
        <>
        <span onClick = {() =>{
            deleteTrackFunc(track_id)
         }}>❌</span>
        </>
    )
}
