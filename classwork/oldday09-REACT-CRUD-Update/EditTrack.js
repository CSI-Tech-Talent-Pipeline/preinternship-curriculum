import React, { useState, Fragment } from 'react';

// 1. Takes a prop, `const EditTrack = (   eachTrack   ) => {`
const EditTrack = (  { track }  ) => {

    //console.log(track.track)
    // 4. declare state using useState with the default value
    const [newtrack, setNewtrack] = useState(track.track)

   console.log(newtrack)

    // 10. setup that function `updateTrackFunc`
   const updateTrackFunc = async (e) => {

       console.log(e)
       e.preventDefault()

        try{
            //11 store newtrack state in the body variable with "column name(key)" of the database table in this case, `track`
            const body = {track: `${newtrack}`}
            // console.log(body)
            // console.log(track.track_id)

            //12 fetch using the correct id, using the props
            const response = await fetch(`http://localhost:8080/tracks/${track.track_id}/`, {

                //13 use put method
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            console.log(response)
            //14
            window.location = "/tracklist";
        }catch(err){
            console.error(err.message)
        }
    }

    return(
        <Fragment>
          
            {/* <!-- Trigger the modal with a button --> */}
            {/* 7. Change the `data-target` with `#id` as well  */}
            <span type="button"  
                    data-toggle="modal" 
                    data-target={`#id${track.track_id}`}>✏️</span>

            {/* <!-- Modal --> */}
            {/* 6. but all other data's pop up window shows the same value. The correlation is wrong. In order to fix that, change the id in the `modal` tag with the trackid from the props. */}
            <div id={`id${track.track_id}`} 
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

                        <div className="modal-body">
                        {/* 2. add input attributes in the modal-body */}
                            <input 
                                type = "text" 
                                className='form-control'
                                // 5. add `value` as an attribute in the input tag with the `newTrack` from the state
                                value={newtrack} 
                                // 8. Add `onChange` attribute to the input tag
                                onChange = { e => { setNewtrack(e.target.value) }}/>
                        </div>

                        <div className="modal-footer">
                            {/* 3. add `edit` button in the modal footer. */}
                            {/* 9. add `onClick` attribute to fire on a mouse click to execute JS function */}
                            <button 
                                type="button" 
                                className="btn btn-success" 
                                data-dismiss="modal"
                                onClick={e => updateTrackFunc(e)}>Edit</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )


}
export default EditTrack