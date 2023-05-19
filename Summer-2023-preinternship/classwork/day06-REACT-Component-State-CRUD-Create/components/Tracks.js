import React from 'react'
import DeleteTrack from './DeleteTrack'
import EditTrack from './EditTrack'

export default function Tracks( { tracks } ) {

    //onsole.log("TRACKS tracks:::::", tracks)
    return (
        <>           
            {tracks.map( oneEle => {
                      return (
                    <tbody key = {oneEle.track_id}>
                        <tr>
                            <th scope="row">{oneEle.track_id}</th>
                            <td>{oneEle.track}</td>
                            <td><EditTrack trackinfo = {oneEle}/> </td>
                            <td><DeleteTrack track_id = {oneEle.track_id}/></td>             
                        </tr>
                    </tbody>
                    )
                    })}
        </>
    )
}
