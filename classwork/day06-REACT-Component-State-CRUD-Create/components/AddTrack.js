import React, {Fragment, useState} from "react"
//import ListTracks from "./ListTracks"

const AddTrack = () => {

    const [track, setTrack] = useState("type your favorite song");

    //1. let create a function to submit and use async/await    
    const onSubmitForm = async (event) => {
        event.preventDefault() //prevent page refresh to happen so we can handle the data
    //2. prevent default 
        try{    //4. send the request 
            //5. declare body 
            const body = {track}
            //6. fetch 
            const response = await fetch ("http://localhost:8080/tracks", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              })
              console.log(response)
            }
        catch(err){ //3. error catch
            console.error(err.message)
        }
    }


    return(
        <Fragment>
            <h1 className = "text-center mt-5"> 
                Add Your Favorite Track
            </h1>

            <form className = "d-flex m-5" onSubmit = { onSubmitForm }>
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {track}
                    // onChange = {(event) => setTrack(event.target.value)} 
                    onChange = {(event) => setTrack(event.target.value)} 
                    />
                
                <button className="btn btn-info" >
                    ADD
                </button>
            </form>
            {/* <ListTracks /> */}
        </Fragment>
        
    )
}

export default AddTrack
