import axios from "axios";
import { useState } from "react"
//only the first time this will get rendered
// like data will be intialised to []
// in all future re renders , it will not get re-initialised

let count =1;
// react only re-renders component only if a "state variable" changes
function App() {
    let [data, setData] = useState([]);//////this returns u an array containing one array and one fn


    console.log ("no of renders " + count++)
    // setTimeout(() => {
    //   setData([...data , { title : "hi there " + Math.random()}])
    // },3000);
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response)=>{
        setData(response.data)
      })
    

  return <div>
        {data.map(todo=> <TODO title ={todo.title} />)}
  </div>
} 
    
function TODO(props){
  return <div style = {{margin : 20 , padding : 30 , border : "2px solid black" , borderRadius : 30}}>
    {props.title}
  </div>
}

export default App
