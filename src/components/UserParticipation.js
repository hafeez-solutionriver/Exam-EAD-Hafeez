import { useState ,useEffect} from "react"

function UserParticipation({votes,setVotes}) {
 
    const [id,setId]  = useState("0")
    const handleChange = (event)=>{

        const {value} = event.target
        
        setId(value)

    }

    return ( 
        <>
        
       
       <br/><br/>
            <input key ={votes["choices"][0]["id"]} type="radio" name="language" value={votes["choices"][0]["id"]}onChange={handleChange} />
            {votes["choices"][0]["label"]}  <br/>
            <input key ={votes["choices"][1]["id"]} type="radio" name="language" value={votes["choices"][1]["id"]} onChange={handleChange}/>
            {votes["choices"][1]["label"]}  <br/>
            <input key ={votes["choices"][2]["id"]} type="radio" name="language" value={votes["choices"][2]["id"]} onChange={handleChange}/>
            {votes["choices"][2]["label"]}  <br/>
            <input key ={votes["choices"][3]["id"]} type="radio" name="language" value={votes["choices"][3]["id"]} onChange={handleChange}/>
            {votes["choices"][3]["label"]}  <br/>
            <button type="submit" onClick={()=>{
                
            
                
             const newCount = votes["choices"][+id-1]["votes"]+1

             votes["choices"][+id-1]["votes"] = newCount
            
            setVotes({...votes});


            }}>Submit</button>
      </>
    
     );
}

export default UserParticipation;