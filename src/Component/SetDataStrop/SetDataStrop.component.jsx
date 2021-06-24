import React, { useState } from 'react';
import Strop from '../Strop/Strop.component'
import background from '../../images/back.jpg'
import '../../../node_modules/bootstrap/js/dist/modal'
import './SetDataStrop.css'
const SetDataStrop = () => {

    let str;
    let temp;
    const [state, setState] = useState(0);
    const [t, setT] = useState(5000);
    const [isi, setIsi] = useState(3000);
    const [fixed, setFixed] = useState(1000);
    const [mode,setMode]=useState("D");
    const handelStart = () => {
        setState(1);

    }

    const [data, setData] = useState([
        { type: "cong", color: "#B10D0D", text: "قرمز", nameColor: "قرمز" },
        { type: "cong", color: "#4CA810", text: "سبز", nameColor: "سبز" },
        { type: "cong", color: "#F0E210", text: "زرد", nameColor: "زرد" },
        { type: "cong", color: "#1042F0", text: "آبی", nameColor: "آبی" },
        { type: "incong", color: "#1042F0", text: "سبز", nameColor: "آبی" },
        { type: "incong", color: "red", text: "زرد", nameColor: "قرمز" },
        { type: "incong", color: "green", text: "قرمز", nameColor: "سبز" }]);

    const [ascii, setAscii] = useState([{ keyName: "سبز", codeE: 83, codeF: 115 }, { keyName: "زرد", codeE: 68, codeF: 100 },
    { keyName: "آبی", codeE: 75, codeF: 107 }
        , { keyName: "قرمز", codeE: 76, codeF: 108 }])
    const handelForm = (event) => {
        event.preventDefault();
        console.log("hi");
        const inputData = event.target.elements;
        console.log(inputData);
        for (const data of inputData) {
            if (data.value !== "")
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
                    case 'fixed':
                        setFixed(parseInt(data.value));
                        break;
                    case 'red':
                        str = data.value;
                        temp = ascii;
                        temp[3].codeF = str.charCodeAt(0)
                        temp[3].codeE = temp[3].codeF - 32;
                        console.log(temp[3].codeE);
                        console.log(temp[3].codeF);
                        setAscii(temp);

                        break;
                    case 'green':
                        str = data.value;
                        temp = ascii;
                        temp[0].codeF = str.charCodeAt(0)
                        temp[0].codeE = ascii[0].codeF - 32;
                        console.log(temp[0].codeE);
                        console.log(temp[0].codeF);
                        setAscii(temp);
                        break;
                    case 'yellow':
                        str = data.value;
                        temp = ascii;
                        temp[1].codeF = str.charCodeAt(0)
                        temp[1].codeE = ascii[1].codeF - 32;
                        console.log(temp[1].codeE);
                        console.log(temp[1].codeF);
                        setAscii(temp);
                        break;
                    case 'blue':
                        str = data.value;
                        temp = ascii;
                        temp[2].codeF = str.charCodeAt(0)
                        temp[2].codeE = temp[2].codeF - 32;
                        console.log(temp[2].codeE);
                        console.log(temp[2].codeF);
                        setAscii(temp);
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
        console.log(ascii);

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
                                        <h5 className="modal-title" id="exampleModalLabel">تنظیمات Strop</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body modalBack">
                                        <p>برای کلید مربوط به هر رنگ یکی از حروف a-z را انتخاب کنید و برای هر
                                        کدام از تایم ها عددی بالا 1000 قرار دهید
                                        </p>
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
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="inputFixed">تایم fixed</label>
                                                <input type="text" className="form-control" id="fixedT" name="fixed" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید قرمز</label>
                                                <input type="text" className="form-control" id="red" maxlength="1" name="red" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید زرد</label>
                                                <input type="text" className="form-control" id="yellow" maxlength="1" name="yellow" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید سبز</label>
                                                <input type="text" className="form-control" id="green" maxlength="1" name="green" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید آبی</label>
                                                <input type="text" className="form-control" id="blue" maxlength="1" name="blue" />
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

                <Strop fixed={fixed} isi={isi} t={t} data={data} ascii={ascii} mode={mode} />
            </>
        )

}
export default SetDataStrop;