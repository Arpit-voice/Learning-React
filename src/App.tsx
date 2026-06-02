

function App() {
////can write here JS(99% of the time ) or html

  // now  lets say we imported response.data.post from axios which will simply look like this--
  const post = [{
    title : "IIT BHU",
    description :  "we are the best in the world"
  },{
    title : "IIT DELHI",
    description :  "we are the face of IITs"
  }]

  // setInterval(() => {
  //   console.log("interval ran")
  //   post.push({
  //     title : "IIT Dhanbad" ,
  //     description: "have u heard of Mining Engg"
  //   })
  //   console.log(post)
  // },1000);
////thins thing is not getting rerendered on the website


  let postcomponents = post.map(p=><Post title ={p.title} description = {p.description}/> )  
  //convert object to component thing using map

  return (
   <div>
    <h1>
      hi there
    </h1>

    {postcomponents}
  
    <Post title ="IIT BOMBAY" description = "I am a joke to u guys"/>
    <Post title ="IIT MANDI" description = "we are enjoying the real college life"/>

    {post.map(p=><Post title ={p.title} description = {p.description}/> ) }

   </div>
  )
}
    
///props= {title = "IIT BHU ", description : "we are the best in the world"}

function Post(props){
  return (
    <div style={{ backgroundColor : "yellow", fontSize : 20 , border : "2px solid black" , borderRadius : 20 , padding : 20 , }}>
      <div>
        <b>{props.title}</b>
      </div>

      <div>
        {props.description}
      </div>

    </div>
  )


}

export default App
