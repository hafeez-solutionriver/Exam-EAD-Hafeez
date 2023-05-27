import { useState } from "react"

function PollDisplay() {

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
      </>
    
     );
}

export default PollDisplay;