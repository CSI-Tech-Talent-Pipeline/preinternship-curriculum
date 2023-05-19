import React from 'react';
import DeleteTrack from './DeleteTrack';
import EditTrack from './EditTrack';


export default function Track( {tracks} ) {

    return (
        <>
            {tracks.map(each => {
                return(
                    <tbody key={each.track_id}>
                    <tr>
                        <th >{each.track_id}</th>
                        <td>{each.track}</td>
                        <td><EditTrack track = {each}/></td>
                        <DeleteTrack track_id = {each.track_id}/>
                    </tr>
                    </tbody>
                    )
            })}
        </>
    )
}