### Edit Track
* Create a `EditTrack` component

* Bootstrap Modal, select the style and copy and paste it into the EditTrack component
            
            ```jsx
            {/* <!-- Trigger the modal with a button --> */}
            <span type="button"  
                    data-toggle="modal" 
                    data-target={`#myModal`}>✏️</span>

            {/* <!-- Modal --> */}
            <div id="myModal" 
                 class="modal fade" r
                 ole="dialog">

                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Header</h4>
                            <button 
                                type="button" 
                                class="close" 
                                data-dismiss="modal">&times;</button>
                            
                        </div>
                        
                        {/* 2 */}
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>

                        <div class="modal-footer">
                            {/* 3 */}
                            <button type="button" class="btn btn-default" data-dismiss="modal">Edit</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            ```
* make sure it is bootstrap 4 and the JS query script is in the body tag in the public, index.html

* `Track.js`, add an extra props to send the track info
    <EditTrack trackinfo= {each}/>

* Edit the modal (popup window) in the child component (EditTrack.js)

    1. Takes a prop, `const EditTrack = (   { eachTrack }   ) => {`

    2. add input attributes in the modal-body
    ```jsx
    <div class="modal-body">
        <input type = "text" className='form-control' />
    </div>
    ```
    
    3. add `edit` button in the modal footer.
    ```jsx
    <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    
    ```
    4. declare state using useState with the default value
    ` const [newTrack, setNewTrack] = useState(trackinfo.track)`

    5. add `value` as an attribute in the input tag with the `newTrack` from the state
    ```js       
    <div className="modal-body">
        <input type = "text" classNameName='form-control' value ={newTrack} />
    </div>
    ```
    
    6. but all other data's pop up window shows the same value. The correlation is wrong. In order to fix that, change the id in the `modal` tag with the trackid from the props.
    ```jsx
    {/* <!-- Modal --> */}
        <div id={`id${track.track_id}`} 
                className="modal fade" 
                role="dialog">
        ```

    7. Change the `data-target` with `#id` as well 
    ```jsx
        <button type="button" 
                className="btn btn-info btn-lg" 
                data-toggle="modal" 
                data-target={`#id${track.track_id}`}>Edit</button>  
    ```

    8. Add `onChange` attribute to the input tag
    ```js
      <div className="modal-body">
        <input 
            type = "text" 
            className='form-control'
            // 5. add `value` as an attribute in the input tag with the `newTrack` from the state
            value={newtrack} 
            onChange = { e => { setNewtrack(e.target.value) }}/>
       </div>
    ```

    9. add `onClick` attribute to fire on a mouse click to execute JS function
    ```js
    <button 
        type="button" 
        className="btn btn-success" 
        data-dismiss="modal"
        onClick={e => updateTrackFunc(e)}>Edit</button>
    ```

    10. setup that function `updateTrackFunc` on the top, above the return value with prevent default

    ```js
       const updateTrackFunc = async (e) => {
           console.log(e)
           e.preventDefault()

        try{

        }catch(err){
            console.error(err.message)
        }
   }
    ```

    10-2 add prevent default
     
    11 store newtrack state in the body variable with "column name(key)" of the database table in this case, `track`
            const body = {track: `${newtrack}`}

    12 fetch using the correct id, using the props
    const response = await fetch(`http://localhost:8080/tracks/${track.track_id}/`, {

    13 
    ```js
    method: "PUT",
    headers: {
                'Content-Type': 'application/json',
            },
    body: JSON.stringify(body)
    })
    console.log(response)
    ```

    //14
    window.location = "/tracklist";
