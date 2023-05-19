## SWBAT  [Students Will Be Able To]
- [ ] understand SRP(Single Responsibility Principle)
- [ ] Move the delete function to a brand new delete component to practice SRP
- [ ] visualize/explain `RESTful API` and `HTTP request`
- [ ] Explain how the frontend browser and backend server communicates
- [ ] Explain RESTful API
- [ ] Edit/update a data follow along 


# SRP(Single Responsibility Principle)
 * Create `DeleteTrack` class component Single Responsibility Principle
    -Single Responsibility Principle (SRP): A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller sub-components.


    ```js
    //DeleteTrack.js (child component)
    import React from 'react'

    export default function DeleteTrack( {track_id}) {

        console.log(track_id)

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
    ```


    ```js 
    //Tracks.js (parent component)
    import React from 'react'
    import DeleteTrack from './DeleteTrack'

    export default function Tracks( { tracks } ) {

        console.log("TRACKS tracks:::::", tracks)
        return (
            <>           
                {tracks.map( oneEle => {
                        return (
                        <tbody key = {oneEle.track_id}>
                            <tr>
                                <th scope="row">{oneEle.track_id}</th>
                                <td>{oneEle.track}</td>
                                <td><DeleteTrack track_id = {oneEle.track_id}/></td>             
                            </tr>
                        </tbody>
                        )
                        })}
            </>
        )
    }

    ```

# REST API
## RESTful API

+------------------+----------------+-----------------+
|       CRUD       |      HTTP      |       SQL       |
+------------------+----------------+-----------------+
|      CREATE      |      POST      |     INSERT      |
+------------------+----------------+-----------------+
|       READ       |       GET      |      SELECT     |
+------------------+----------------+-----------------+
|      UPDATE      |       PUT      |      UPDATE     |
+------------------+----------------+-----------------+
|      DELETE      |     DELETE     |      DELETE     |
+------------------+----------------+-----------------+


![restAPI](https://i.imgur.com/GBDHTXW.png)

* restful API uses transfer protocol in order to run CRUD operation.
* Transfer protocol : HTTP request (Post, Get, Put, Delete)
* Restful API takes the HTTP request then instruct the DB what kinds of CRUD operation needs to get done. 

* What's an API?
    An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response). For example, the API design for a weather service could specify that the user supply a zip code and that the producer reply with a 2-part answer, the first being the high temperature, and the second being the low.  

    In other words, if you want to interact with a computer or system to retrieve information or perform a function, an API helps you communicate what you want to that system so it can understand and fulfill the request. 

    You can think of an API as a mediator between the users or clients and the resources or web services they want to get. It’s also a way for an organization to share resources and information while maintaining security, control, and authentication—determining who gets access to what. 

    Another advantage of an API is that you don’t have to know the specifics of caching—how your resource is retrieved or where it comes from.

* REST
    REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

    When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines. 

    Something else to keep in mind: Headers and parameters are also important in the HTTP methods of a RESTful API HTTP request, as they contain important identifier information as to the request's metadata, authorization, uniform resource identifier (URI), caching, cookies, and more. There are request headers and response headers, each with their own HTTP connection information and status codes. (excerpt from redhat)

# CRUD
### Edit Track
* Create a `EditTrack` component

* Bootstrap Modal, select the style and copy and paste it into the EditTrack component
            
            ```jsx
            {/* <!-- Trigger the modal with a button --> */}
            <button type="button" 
                    class="btn btn-info btn-lg" 
                    data-toggle="modal" 
                    data-target="#myModal">Edit</button>

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

                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Edit</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            ```

* `Track.js`, add an extra props to send the track info
    <EditTrack trackinfo= {each}/>

* Edit the modal (popup window) in the child component (EditTrack.js)

    1. Takes a prop, `const EditTrack = (   eachTrack   ) => {`

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
    ` const [newTrack, setNewTrack] = useState(eachTrack.trackinfo.track)`

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

    10. setup that function `updateTrackFunc` on the top, above the return value

    ```js
       const updateTrackFunc = async (e) => {
        try{

        }catch(err){
            console.error(err.message)
        }
   }
    ```
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