import { useState } from 'react';
import background from '../../images/back.jpg'
import SetupCounter from '../SetupCounter/SetupCounter.component'
const SetData=()=>{

    const [state, setState] = useState(0);
    const [t, setT] = useState(5000);
    const [isi, setIsi] = useState(3000);
    const [nthNumber,SetnthNumber]=useState(2);
    const [numbers,setNumbers]=useState([1, 2, 1, 2, 8, 5, 8]) ;
    const [mode,setMode]=useState("D");
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
                        backgroundSize: 'cover', height: 700
                    }}>
                        <div className="col d-flex align-items-center justify-content-end">
                            <button type="button" class="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} onClick={handelStart} ><h4
                                    style={{ color: "#282828" }}
                                >شروع آزمون</h4></button>

                        </div>
                        <div className="col d-flex align-items-center justify-content-start ">
                            <button type="button" class="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} data-bs-toggle="modal" data-bs-target="#exampleModal" ><h4
                                    style={{ color: "#282828" }}
                                > تنظیمات اولیه</h4></button>

                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content modalBack">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">تنظیمات Nback</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body modalBack">
                                        <form onSubmit={handelForm}>
                                            <div className="form-row" >
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputNObject">تعداد محرک ها</label>
                                                    <input type="text" className="form-control" id="nObject" name="nObject" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputIsi">تایم isi</label>
                                                    <input type="text" className="form-control" id="isiT" name="isi" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputT">تایم t</label>
                                                    <input type="text" className="form-control" id="tT" name="t" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputNth">چند عدد قبل تر</label>
                                                    <input type="text" className="form-control" id="nth" name="nth" />
                                                </div>
                                            </div>
                                            <label className="mt-3" htmlFor="mode" >نمایش یا عدم نمایش نتیجه انتخاب</label>
                                            <select className="form-select" aria-label="Default select"
                                            name="selectMode">
                                            
                                                <option value="trueShow"selected>نمایش</option>
                                                <option value="falseShow">عدم نمایش</option>
                                            </select>



                                            <button type="button" className="btn btn-secondary  mt-5 mb-3 ms-1" data-bs-dismiss="modal">انصراف</button>
                                            <button type="submit" className="btn btn-success  mt-5 mb-3" >ذخیره تغیرات</button>

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

                <SetupCounter  isi={isi} t={t} numbers={numbers}  nthNumber={nthNumber} mode={mode}/>
            </>
        )


}
export default SetData;