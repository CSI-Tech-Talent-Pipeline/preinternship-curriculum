import React, {useState} from 'react'

export default function EditTrack( { trackinfo } ) {

    console.log(trackinfo.track) 

    const [newtrack, setNewtrack] = useState(trackinfo.track)

    console.log(newtrack)


    const updateTrackFunc = async (e) => {
        e.preventDefault()

        try{
           const body = {track: `${newtrack}`}
           console.log(body)
           const response = await fetch(`http://localhost:8080/tracks/${trackinfo.track_id}/`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
           })

           console.log(response)

        }catch(err){
            console.error(err.message)
        }
    }

    return (
        <>
              {/* <!-- Trigger the modal with a button --> */}
              <span type="button"  
                    data-toggle="modal" 
                    data-target={`#id${trackinfo.track_id}`}>✏️</span>

            {/* <!-- Modal --> */}
            <div id={`id${trackinfo.track_id}`} 
                 className="modal fade" 
                 role="dialog">

                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Header</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal">&times;</button>
                            
                        </div>
                        
                        {/* 2 */}
                        <div className="modal-body">
                            <input 
                                type ="text" 
                                className="form-control" 
                                value={newtrack}
                                onChange = { e => { setNewtrack(e.target.value)}}
                                />
                        </div>

                        <div className="modal-footer">
                            {/* 3 */}
                            <button 
                                type="button" 
                                className="btn btn-default" 
                                data-dismiss="modal"
                                onClick={e => updateTrackFunc(e)}>Edit</button>

                            <button 
                                type="button" 
                                className="btn btn-default" 
                                data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
