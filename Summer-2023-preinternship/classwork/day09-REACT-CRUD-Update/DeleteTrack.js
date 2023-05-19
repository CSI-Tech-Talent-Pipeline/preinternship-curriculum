import React, { Component } from 'react'

export default class DeleteTrack extends Component {
    
    render() {
        const deleteTrack = async (id) => {
            try{
            const response = await fetch(`http://localhost:8080/tracks/${id}`,{
                method: "DELETE"
                })
                console.log("deleted", response)
            }catch(err){
                console.error(err.message)
            }
        }

        return (
           <>
            <td><span onClick ={() => {deleteTrack(this.props.track_id)}}>❌</span></td>
           </>
        )
    }
}