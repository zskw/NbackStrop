const Counter =(props)=>{
    return (
      
        <>
        <div className="container ">
          <div className="row">
            <div className="col-12">
            <h1 style={{width: "100%", textAlign: "center",fontSize:320}}>{props.number}</h1></div>
            </div>
            
       {props.showReaction!=" "?<div className="row" >
          <div className="col-12 d-flex align-items-center justify-content-center mt-5"style={{height:300}}>
                  <h4 className="text-center">{props.showReaction}</h4>
              </div>
        </div>:""}
        
        </div>
        </>
      );

}
export default Counter;