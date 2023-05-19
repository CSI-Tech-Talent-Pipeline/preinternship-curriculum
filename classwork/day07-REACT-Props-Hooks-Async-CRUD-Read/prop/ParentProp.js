import React from 'react'
import ChildProp from './ChildProp'

export default function ParentProp() {

    return (
        <div>
            <ChildProp  greeting="hi"  
                        number={7} 
                        boolean={true} 
                        callback= { () => console.log("call me")}
                        object = {{ key2: "value2"}}
                        
                        />
        </div>
    )
}
