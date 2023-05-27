import ThankYouMessage from "./ThankYouMessage";

function AnotherUserParticipation({setStart}) {

    return (<>
 
    <button onClick={()=>{

        setStart(false)

    }}>Particiapte Again</button>
    <ThankYouMessage/>
    </> 
    
    );

    
}

export default AnotherUserParticipation;