import React, {useState, useReducer, useEffect} from 'react'
import axios from 'axios'


const Fetch = ({productId}) => {
const [id, setId] = useState(0);

useEffect(() => {
  setId(productId);
},  [])

return (
  <div>
    <p>SomeTestText</p>
    <p>{id}</p>
  </div>

);




// ORIGINAL Fetch code
// const initialState = {
//   error: null,
//   greeting: null,
// }

// function greetingReducer(state, action) {
//   switch (action.type) {
//     case 'SUCCESS': {
//       return {
//         error: null,
//         greeting: action.greeting,
//       }
//     }
//     case 'ERROR': {
//       return {
//         error: action.error,
//         greeting: null,
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

// export default function Fetch({url}) {
//   const [{error, greeting}, dispatch] = useReducer(
//     greetingReducer,
//     initialState,
//   )
//   const [buttonClicked, setButtonClicked] = useState(false)

//   const fetchGreeting = async url =>
//     axios
//       .get(url)
//       .then(response => {
//         const {data} = response
//         const {greeting} = data
//         dispatch({type: 'SUCCESS', greeting})
//         setButtonClicked(true)
//       })
//       .catch(error => {
//         dispatch({type: 'ERROR', error})
//       })

//   const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'

//   const testText = 'SomeCoolText'

//   return (
//     <div>
//       <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
//         {buttonText}
//       </button>
//       {greeting && <h1>{greeting}</h1>}
//       {error && <p role="alert">Oops, failed to fetch!</p>}
//       <p>{testText}</p>
//     </div>
//   )
}


export default Fetch;