import React from 'react'

// export default function ChildProp(props) {
//     console.log(props)

//     return (
//         <div>
//             This is child prop from child component
//             <h1>{props.greeting}</h1>
//             <h1>{props.number}</h1>
//             <h1>{props.boolean}</h1>  
//         </div>
//     )
// }

class ChildProp extends React.Component {
    render () {
        console.log(this.props)
        return(
            <div>
                <h1>hello</h1>
                <h1>{this.props.greeting}</h1>
                 <h1>{this.props.number}</h1>             
            </div>
        )
    }
}

export default ChildProp