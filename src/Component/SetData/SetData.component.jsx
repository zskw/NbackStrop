import SetupCounter from '../SetupCounter/SetupCounter.component'
const SetData=()=>{
    let numbers = [1, 2, 1, 2, 8, 5, 8];

    return (
       
             <SetupCounter isi={1000} t={2000} numbers={numbers} nthNumber={2}/> 

      
    );
}
export default SetData;