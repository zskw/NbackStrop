import React, { useState, useEffect} from 'react';
const Ready=(props)=>{
    useEffect(() => {
        window.addEventListener("keypress", handleKeypress)
        return () => {
    
          window.removeEventListener("keypress", handleKeypress);
        };
      }, []);
     const handleKeypress=(event)=>{
        console.log("ready");
        if (event.keyCode === 32) {
            props.setReady("true");
        }
        
     }
    return(
        <>
         <div className="container">
             <div className="row mt-md-5">
                 <div className="col"style={{ textAlign: "center"}}>
                    <h4>درصورت آمادگی برای شروع آزمون کلید Space را فشار دهید تا آزمون شروع شود</h4>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Ready;