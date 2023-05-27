import { useState,useEffect } from "react"
import UserParticipation from "./UserParticipation";
import { render } from "@testing-library/react";

function PollDisplay() {


   
    const [isStart,setIsStart] = useState(false)
    
    const [description,setDescription] = useState("Start")
    const [votes,setVotes] =useState({"question": "What is your favorite programming language?",
      
    
    "choices": [
  
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 }
  
  
    ]}) 

   

 
    return ( 
        <>
        
        <label>{votes["question"]}</label><br/>
            
            {votes["choices"][0]["label"]} # of Votes: {votes["choices"][0]["votes"]} <br/>
          
            {votes["choices"][1]["label"]} # of Votes: {votes["choices"][1]["votes"]} <br/>
           
            {votes["choices"][2]["label"]} # of Votes: {votes["choices"][2]["votes"]} <br/>
            
            {votes["choices"][3]["label"]} # of Votes: {votes["choices"][3]["votes"]} <br/>

            <button onClick={()=>{
             
             if(!isStart)
             {
                render(<div><UserParticipation votes={votes} setVotes={setVotes} setStart={setIsStart}/></div>)
                setIsStart(true)
                setDescription("Started")

             }
             
            
            }}> {description}</button>
            
      </>
    
     );
}

export default PollDisplay;