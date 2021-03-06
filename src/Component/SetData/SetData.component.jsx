import { useState } from 'react';
import background from '../../images/back.jpg'
import SetupCounter from '../SetupCounter/SetupCounter.component'
import Ready from '../Ready/Ready.component'
const SetData=()=>{

    const [state, setState] = useState(0);
    const [t, setT] = useState(2000);
    const [isi, setIsi] = useState(1000);
    const [nthNumber,SetnthNumber]=useState(2);
    // const [numbers,setNumbers]=useState([1, 2, 1, 2, 8, 5, 8]);
    // const [numbers,setNumbers]=useState([3, 8, 2, 2, 2, 5, 5, 1, 7, 5, 2, 3, 9, 4, 1, 6, 4, 4, 4, 4, 3, 3, 1, 4, 1]) ;
    // const [numbers,setNumbers]=useState([3, 8, 2, 2, 2, 5, 5, 1, 7, 5, 2, 3, 9, 4, 1, 6, 4, 4, 4, 4, 3, 3, 1, 4, 1, 9, 6, 1, 8, 6, 4, 4, 4, 4, 8, 8, 3, 5, 1, 4, 4, 9, 3, 2, 4, 9, 2, 2, 6, 5, 9, 3, 6, 6, 8, 1, 1, 7, 7, 8, 8, 6, 7, 7, 4, 1, 5, 9, 3, 3, 4, 8, 7, 2, 5]) ;
    const [numbers,setNumbers]=useState([1, 7, 2, 9, 8, 6, 3, 8, 3, 4, 6, 4, 1, 1, 9, 1, 9, 1, 1, 1, 5, 1, 9, 6, 5, 2, 5, 9, 1, 1, 1, 4, 6, 8, 6, 6, 8, 4, 5, 3, 5, 5, 5, 5, 2, 1, 8, 2, 8, 8, 8, 6, 3, 3, 4, 2, 1, 7, 7, 7, 7, 2, 8, 1, 8, 1, 7, 5, 6, 4, 8, 4, 8, 3, 5])
    const [mode,setMode]=useState("D");
    const setReady=(s)=>
    {
        if(s=="true")
        setState(2);
    }
    const handelStart = () => {
        setState(1);
        
    }
   
    const handelForm = (event) => {
        event.preventDefault();
        console.log("hi");
        const inputData = event.target.elements;
        console.log(inputData);
        for (const data of inputData) {
            if(data.value!=="")
            switch (data.name) {
                case 'nObject':
                    console.log(data.value);
                    break;
                case 'isi':
                    setIsi(parseInt(data.value))
                   
                    break;
                case 't':
                   setT(parseInt(data.value));
                    break;
                case 'nth':
                    SetnthNumber(parseInt(data.value));
                    break;
                    case 'selectMode':
                        let tempMode = data.options[data.selectedIndex].value;
                        if(tempMode==="falseShow")
                        setMode("T");
                        else
                        setMode("D");
                        console.log(tempMode);
                        break;
                    
                default:
                    break;
            }

        }
       
       
    }
    if (state === 0)
        return (
            <>
                <div className="container-fluid">

                    <div className="row" style={{
                        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', height: 720
                    }}>
                        <div className="col d-flex align-items-center justify-content-end">
                            <button type="button" className="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} onClick={handelStart} ><h4
                                    style={{ color: "#282828" }}
                                >???????? ??????????</h4></button>

                        </div>
                        <div className="col d-flex align-items-center justify-content-start ">
                            <button type="button" className="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} data-bs-toggle="modal" data-bs-target="#exampleModal" ><h4
                                    style={{ color: "#282828" }}
                                > ?????????????? ??????????</h4></button>

                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content modalBack">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">?????????????? Nback</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body modalBack">
                                        <form onSubmit={handelForm}>
                                            <div className="form-row" >
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputNObject">?????????? ???????? ????</label>
                                                    <input type="number" className="form-control" id="nObject" name="nObject" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputIsi">???????? isi</label>
                                                    <input type="number" className="form-control" id="isiT" name="isi" 
                                                    placeholder="1000" min="30" max="10000"/>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputT">???????? t</label>
                                                    <input type="number" className="form-control" id="tT" name="t"
                                                    placeholder="2000" min="30" max="10000" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputNth">?????? ?????? ?????? ????</label>
                                                    <input type="number" className="form-control" id="nth" name="nth"
                                                    placeholder="2" min="1" max="" />
                                                </div>
                                            </div>
                                            <label className="mt-3" htmlFor="mode" >?????????? ???? ?????? ?????????? ?????????? ????????????</label>
                                            <select className="form-select" aria-label="Default select"
                                            name="selectMode">
                                            
                                                <option value="trueShow"selected>??????????</option>
                                                <option value="falseShow">?????? ??????????</option>
                                            </select>



                                            <button type="button" className="btn btn-secondary  mt-5 mb-3 ms-1" data-bs-dismiss="modal">????????????</button>
                                            <button type="submit" className="btn btn-success  mt-5 mb-3" >?????????? ????????????</button>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
        else if (state === 1)
        return (
            <>

               <Ready setReady={setReady}/>
            </>
        )
   // else if (showGame=="true")
   else if (state===2)
        return (
            <>

                <SetupCounter  isi={isi} t={t} numbers={numbers}  nthNumber={nthNumber} mode={mode}/>
            </>
        )


}
export default SetData;